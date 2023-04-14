import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import {
  DEFICHAINDOMAINS_RESOLVER_ABI,
  DEFICHAINDOMAINS_RESOLVER_ADDRESS,
  DEFICHAINDOMAINS_REGISTRY_ABI,
  DEFICHAINDOMAINS_REGISTRY_ADDRESS,
} from "../../const/contractAddresses";
import * as namehash from "eth-ens-namehash";
import { formatsByCoinType } from "@defichaindomains/address-encoder";

function AddressResolver({ domainName, coindID }) {
  const domainNameHash = namehash.hash(domainName);

  const {
    data: resolvedAddress,
    isError,
    isLoading,
  } = useContractRead({
    abi: DEFICHAINDOMAINS_RESOLVER_ABI,
    address: DEFICHAINDOMAINS_RESOLVER_ADDRESS,
    functionName: "addr",
    args: [domainNameHash],
  });

  if (isError) {
    return;
  }

  if (isLoading) {
    return <div>Fetching the Address...</div>;
  }

  if (resolvedAddress) {
    try {
      const buffer = Buffer.from(resolvedAddress.slice(2), "hex");
      const coinTypeFormats = formatsByCoinType[60];
      if (!coinTypeFormats || !coinTypeFormats.encoder) {
        throw new Error("Coin type not supported");
      }
      const decodedAddress = coinTypeFormats.encoder(buffer);
      return decodedAddress;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return null;
}

export default AddressResolver;
