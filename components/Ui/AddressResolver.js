import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import {
  DEFICHAINDOMAINS_RESOLVER_ABI,
  DEFICHAINDOMAINS_RESOLVER_ADDRESS,
  DEFICHAINDOMAINS_REGISTRY_ABI,
  DEFICHAINDOMAINS_REGISTRY_ADDRESS,
} from "../../const/contractAddresses";
import * as namehash from "eth-ens-namehash";
import {
  formatsByCoinType,
  formatsByName,
} from "@defichaindomains/address-encoder";

function AddressResolver({ domainName, coin }) {
  const domainNameHash = namehash.hash(domainName);
  const coinType = formatsByName[coin].coinType;

  console.log(coinType);

  const {
    data: resolvedAddress,
    isError,
    isLoading,
  } = useContractRead({
    abi: DEFICHAINDOMAINS_RESOLVER_ABI,
    address: DEFICHAINDOMAINS_RESOLVER_ADDRESS,
    functionName: "addr",
    args: [domainNameHash, coinType],
  });

  if (isError || resolvedAddress == "0x") {
    return `No Address Record set for ${coin}`;
  }

  if (isLoading) {
    return <div>Fetching the Address...</div>;
  }

  console.log(resolvedAddress);

  if (resolvedAddress) {
    try {
      const buffer = Buffer.from(resolvedAddress.slice(2), "hex");
      const coinTypeFormats = formatsByCoinType[coinType];
      if (!coinTypeFormats || !coinTypeFormats.encoder) {
        throw new Error("Coin type not supported");
      }
      const decodedAddress = coinTypeFormats.encoder(buffer);
      return decodedAddress;
    } catch (error) {
      console.log(error);
      return `No Address Record set for ${coin}`;
    }
  }
  return null;
}

export default AddressResolver;
