// @DEV NEED TO IMPLEMENT CHECKS THAT ANOTHER LISTING FOR THE SAME OBJECT DOESN'T EXIST. THE SMART CONTRACT ALLOW FOR 2 CONCURRENT LISTING FOR THE SAME NFT

import { useRouter } from "next/router";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import RadioGroup from "../../../components/Ui/RadioGroup";
import Select from "../../../components/Ui/Select";
const ethers = require("ethers");
import { useAccount } from "wagmi";
import {
  NFT_COLLECTION_ADDRESS,
  MARKETPLACE_ADDRESS,
  MARKETPLACE_ABI,
  REGISTRAR_ABI,
} from "../../../const/contractAddresses";

const Sell = () => {
  const router = useRouter();

  const { address } = useAccount();

  const { tokenId } = router.query;

  // const listingOptions = [
  //   {
  //     value: 0,
  //     label: "Fixed Price",
  //     description: "The item is listed at the price you set.",
  //   },
  //   {
  //     value: 1,
  //     label: "Timed auction",
  //     description: "The item is listed for auction.",
  //   },
  // ];

  const [selectedListingType, setSelectedListingType] = useState(0);

  const handleListingTypeChange = async (event) => {
    const newListingType = event.target.value;
    await setSelectedListingType(newListingType);
  };

  const endTimeOptions = [
    {
      value: 86400,
      label: "1 day",
    },
    {
      value: 86400 * 3,
      label: "3 days",
    },
    {
      value: 86400 * 7,
      label: "7 days",
    },
    {
      value: 86400 * 30,
      label: "30 days",
    },
    {
      value: 86400 * 90,
      label: "90 days",
    },
  ];

  const [selectedEndTime, setSelectedEndTime] = useState(
    endTimeOptions[0].value
  );
  const handleEndTimeChange = (event) => {
    const newEndTime = event.target.value;
    setSelectedEndTime(newEndTime);
  };

  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (event) => {
    if (event.target.value <= 0) {
      setSelectedPrice(null);
    } else {
      const wei = ethers.utils.parseUnits(
        event.target.value.toString(),
        "ether"
      );
      setSelectedPrice(wei);
    }
  };

  const [listingParameters, setListingParameters] = useState({});

  useEffect(() => {
    if (tokenId != undefined) {
      setListingParameters({
        assetContract: NFT_COLLECTION_ADDRESS,
        tokenId: ethers.BigNumber.from(tokenId),
        quantity: 1,
        currency: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        pricePerToken: selectedPrice?.toString(),
        startTimestamp: Math.floor(new Date().getTime() / 1000.0),
        endTimestamp:
          Math.floor(new Date().getTime() / 1000.0) + selectedEndTime,
        reserved: false,
      });
      console.log(listingParameters);
    }
  }, [tokenId, selectedPrice, selectedListingType, selectedEndTime]);

  const { config: prepareListingConfig, error: prepareListingError } =
    usePrepareContractWrite({
      address: MARKETPLACE_ADDRESS,
      abi: MARKETPLACE_ABI,
      functionName: "createListing",
      args: [listingParameters],
    });

  const {
    data: createListingData,
    error: createListingError,
    isLoading: isCreateListingLoading,
    write: createListingWrite,
    reset: createListingReset,
  } = useContractWrite(prepareListingConfig);

  const {
    isLoading: isCreateListingTransactionLoading,
    isSuccess: isCreateListingTransactionSuccess,
  } = useWaitForTransaction({
    hash: createListingData?.hash,
  });

  const {
    data: platformFee,
    isError: isErrorPlatformFee,
    isLoading: isLoadingPlatformFee,
  } = useContractRead({
    address: MARKETPLACE_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: "getPlatformFeeInfo",
  });

  const {
    data: isMarketplaceApproved,
    isError: isErrorMarketplaceApproved,
    isLoading: isLoadingMarketplaceApproved,
  } = useContractRead({
    address: NFT_COLLECTION_ADDRESS,
    abi: REGISTRAR_ABI,
    functionName: "isApprovedForAll",
    args: [address, MARKETPLACE_ADDRESS],
  });

  useEffect(() => {
    console.log("is the marketplace approved: ", isMarketplaceApproved);
  }, [isMarketplaceApproved]);

  const { config: prepareApprovalConfig, error: prepareApprovalError } =
    usePrepareContractWrite({
      address: NFT_COLLECTION_ADDRESS,
      abi: REGISTRAR_ABI,
      functionName: "setApprovalForAll",
      args: [MARKETPLACE_ADDRESS, true],
    });

  const {
    data: setApprovalData,
    error: setApprovalError,
    isLoading: isSetApprovalLoading,
    write: setApprovalWrite,
    reset: setApprovalReset,
  } = useContractWrite(prepareApprovalConfig);

  const {
    isLoading: isSetApprovalTransactionLoading,
    isSuccess: isSetApprovalTransactionSuccess,
  } = useWaitForTransaction({
    hash: setApprovalData?.hash,
  });

  // User requires to set marketplace approval before listing
  async function checkAndProvideApproval() {
    // Check if approval is required
    const hasApproval = await nftCollection?.call(
      "isApprovedForAll",
      nft.owner,
      MARKETPLACE_ADDRESS
    );

    // If it is, provide approval
    if (!hasApproval) {
      const txResult = await nftCollection?.call(
        "setApprovalForAll",
        MARKETPLACE_ADDRESS,
        true
      );

      if (txResult) {
        toast.success("Marketplace approval granted", {
          icon: "👍",
          style: toastStyle,
          position: "bottom-center",
        });
      }
    }

    return true;
  }

  return (
    <div className="page-container">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-start">
          <span className="flex flex-row text-4xl font-bold ">
            <img
              onClick={() => router.back()}
              src={`/icons/chevronLeft.svg`}
              className="mr-4 h-10 cursor-pointer"
            />
            List for Sale
          </span>

          {/* <RadioGroup
            value={0}
            name="listingTypes"
            options={listingOptions}
            handleChange={handleListingTypeChange}
          /> */}
          <h2 className="mt-8 text-2xl font-semibold">Set a Price</h2>
          <div className="mt-4 form-control flex w-full min-w-full">
            <label className=" input-group">
              <input
                placeholder={""}
                className="input input-bordered w-full "
                type="number"
                id="amount"
                name="amount"
                onChange={handlePriceChange}
                min={0}
              />
              <span>DFI</span>
            </label>
          </div>
          <h2 className="mt-8 text-2xl font-semibold">Set duration</h2>
          <Select handleChange={handleEndTimeChange} options={endTimeOptions} />
          <h2 className="mt-8 text-2xl font-semibold">Summary</h2>

          <div className="mt-4 flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="text-xl">Listing Price</p>
              <p className="text-xl ">
                {selectedPrice
                  ? ethers.utils.formatEther(selectedPrice._hex)
                  : "--"}{" "}
                DFI
              </p>
            </div>
            <div className="flex row justify-between">
              <p className="text-xl">Service Fee</p>
              {platformFee && (
                <p className="text-xl ">{platformFee[1] / 100}%</p>
              )}
            </div>
            <div className="divider"></div>
            <div className="flex row justify-between">
              <p className="text-2xl font-bold">Potential Earning</p>
              <p className="text-2xl font-bold ">
                {"~"}
                {selectedPrice && platformFee
                  ? (
                      ethers.utils.formatEther(selectedPrice._hex) *
                      (1 - platformFee[1] / 10000)
                    ).toFixed(4)
                  : "--"}{" "}
                DFI
              </p>
            </div>
          </div>

          {/* Listing/Authorize Button + MODAL */}
          {isMarketplaceApproved ? (
            <div className="w-full">
              <label
                htmlFor="create-listing-modal"
                className="mt-8 btn w-full btn-primary"
                disabled={!createListingWrite}
                onClick={() => createListingWrite?.()}
              >
                Complete Listing
              </label>
              <input
                type="checkbox"
                id="create-listing-modal"
                className="modal-toggle"
              />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center min-h-56">
                  {(isCreateListingTransactionLoading ||
                    isCreateListingLoading) && (
                    <div className="flex flex-col justify-center items-center">
                      <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-primary to-secondary ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-base-100 rounded-full "></div>
                      </div>
                      <h3 className="mt-4 font-bold text-lg">
                        Processing your transaction
                      </h3>
                    </div>
                  )}
                  {createListingError && (
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="mt-4 font-bold text-6xl">🙀</h3>
                      <h3 className="mt-4 font-bold text-lg">
                        Something went wrong
                      </h3>
                      <div>
                        {(prepareListingError || createListingError)?.message}
                      </div>
                      <div className="modal-action">
                        <label
                          htmlFor="create-listing-modal"
                          className="btn btn-primary"
                          onClick={() =>
                            setTimeout(() => createListingReset?.(), 500)
                          }
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  )}
                  {isCreateListingTransactionSuccess && (
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="mt-4 font-bold text-6xl">🥳</h3>
                      <h3 className="mt-4 font-bold text-lg">Success!</h3>
                      <div>Listing Created Successfully</div>
                      <div className="modal-action">
                        <label
                          htmlFor="create-listing-modal"
                          className="btn btn-primary"
                          onClick={() => router.back()}
                        >
                          View Item
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <label
                htmlFor="create-listing-modal"
                className="mt-8 btn w-full btn-primary"
                disabled={!setApprovalWrite}
                onClick={() => setApprovalWrite?.()}
              >
                Authorize Marketplace
              </label>
              <input
                type="checkbox"
                id="create-listing-modal"
                className="modal-toggle"
              />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center min-h-56">
                  {(isSetApprovalTransactionLoading ||
                    isSetApprovalLoading) && (
                    <div className="flex flex-col justify-center items-center">
                      <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-primary to-secondary ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-base-100 rounded-full "></div>
                      </div>
                      <h3 className="mt-4 font-bold text-lg">
                        Processing your transaction
                      </h3>
                    </div>
                  )}
                  {setApprovalError && (
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="mt-4 font-bold text-6xl">🥵</h3>
                      <h3 className="mt-4 font-bold text-lg">
                        Something went wrong
                      </h3>
                      <div>
                        {(prepareApprovalConfig || setApprovalError)?.message}
                      </div>
                      <div className="modal-action">
                        <label
                          htmlFor="create-listing-modal"
                          className="btn btn-primary"
                          onClick={() =>
                            setTimeout(() => setApprovalReset?.(), 500)
                          }
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  )}
                  {isSetApprovalTransactionSuccess && (
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="mt-4 font-bold text-6xl">🥳</h3>
                      <h3 className="mt-4 font-bold text-lg">Success!</h3>
                      <div>Marketplace Authorized Successfully</div>
                      <div className="modal-action">
                        <label
                          htmlFor="create-listing-modal"
                          className="btn btn-primary"
                          onClick={() =>
                            router.reload(window.location.pathname)
                          }
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 p-4 ">
          <img
            className="rounded-xl w-11/12"
            src={`https://metadata.defichain-domains.com/mumbai/0xe4e073affc03fc569a1649a3b0e9fdf6e2b57750/${tokenId}/image.svg`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sell;
