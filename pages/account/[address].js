import { useRouter } from "next/router";
import React, { useState } from "react";
import OwnedDomains from "../../components/Grids/OwnedDomains";
import OwnedListings from "../../components/Grids/OwnedListings";
import DomainNameResolver from "../../components/Ui/DomainNameResolver";

const AccountPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const tabs = ["Owned Domains", "On Sale"];

  const content = [
    <OwnedDomains ownerAddress={address} />,
    <OwnedListings ownerAddress={address} />,
  ];

  const [activeTab, setActiveTab] = useState(0);

  const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
      <div className="tabs tabs-boxed">
        {" "}
        {tabs.map((tab, index) => (
          <a
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-48 tab ${activeTab === index && "tab-active "} `}
          >
            {tab}
          </a>
        ))}
      </div>
    );
  };

  const TabContent = ({ activeTab, content }) => {
    return <div>{content[activeTab]}</div>;
  };

  return (
    <div className="page-container">
      <div className="flex flex-col text-center items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h1 className="text-3xl mt-8">
          {address && <DomainNameResolver address={address} />}
        </h1>
      </div>
      <div className="mt-8 text-center flex justify-center">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <TabContent activeTab={activeTab} content={content} />
    </div>
  );
};

export default AccountPage;
