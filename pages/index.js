import React, { useRef, useState } from "react";
import Select from "../components/Ui/Select";
import AddressResolver from "../components/Ui/AddressResolver";
import DomainNameResolver from "../components/Ui/DomainNameResolver";
import { formatsByName } from "@defichaindomains/address-encoder";

const Home = () => {
  const [selectedCoin, setSelectedCoin] = useState(coinIdOptions[0].value);
  const [domainName, setDomainName] = useState("");
  const [address, setAddress] = useState("");
  const handleCoinChange = (event) => {
    const newCoin = event.target.value;
    setSelectedCoin(newCoin);
  };

  const COIN_LIST = Object.keys(formatsByName);

  return (
    <div className="page-container">
      <div className="hero">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">
              Defichain Domains Boilerplate Starter
            </h1>
            <p className="py-6">Resolve Addresses and Domains</p>

            {/* address Resolver */}
            <div className="mt-8 flex-1">
              <p className="mb-2">
                Type a Defichain Domain and Select the Coin
              </p>
              <div className="flex flex-row mb-4">
                <input
                  className="rounded-lg w-full h-12 p-2 mr-4 text-black"
                  placeholder="e.g. stefano.dfi"
                  onChange={(event) => setDomainName(event.target.value)}
                  value={domainName}
                ></input>
                <Select handleChange={handleCoinChange} options={COIN_LIST} />
              </div>
              {domainName.endsWith(".dfi") && (
                <AddressResolver domainName={domainName} coin={selectedCoin} />
              )}
            </div>
            {/* Reverse Resolver */}
            <div className="mt-8 flex-1">
              <p className="mb-2">
                Type an address to resolve the Reverse Domain Record
              </p>
              <div className="flex flex-row mb-4">
                <input
                  className="rounded-lg w-full h-12 p-2 mr-4 text-black"
                  placeholder="e.g. 0x123423523423"
                  onChange={(event) => setAddress(event.target.value)}
                  value={address}
                ></input>
              </div>

              <DomainNameResolver address={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const coinIdOptions = [
  { value: 988, label: "DFI METACHAIN" },
  { value: 1129, label: "DFI NATIVE" },
  { value: 0, label: "BTC" },
  { value: 2, label: "LTC" },
  { value: 3, label: "DOGE" },
  { value: 9000, label: "AVAX" },
  { value: 60, label: "ETH" },
  { value: 501, label: "SOL" },
  { value: 714, label: "BNB" },
  { value: 966, label: "MATIC" },
];
