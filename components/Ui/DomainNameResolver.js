import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import {
  DEFICHAINDOMAINS_RESOLVER_ABI,
  DEFICHAINDOMAINS_RESOLVER_ADDRESS,
} from "../../const/contractAddresses";
import * as namehash from "eth-ens-namehash";

function DomainNameResolver({ address }) {
  const domainNameHash = namehash
    .hash(`${address.slice(2)}.addr.reverse`)
    .toString();

  const {
    data: resolvedName,
    isError,
    isLoading,
  } = useContractRead({
    abi: DEFICHAINDOMAINS_RESOLVER_ABI,
    address: DEFICHAINDOMAINS_RESOLVER_ADDRESS,
    functionName: "name",
    args: [domainNameHash],
  });

  if (isError) {
    return;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (resolvedName) {
    return <div>{resolvedName}</div>;
  } else {
    {
      address.slice(0, 5);
    }
    {
      ("...");
    }
    {
      address.slice(37, 42);
    }
  }
}

export default DomainNameResolver;
