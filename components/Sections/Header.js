import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";
import { CustomConnectButton } from "../Ui/CustomConnectButton";

export default function Header() {
  return (
    <div className="navbar w-screen bg-base-100 px-8 py-4">
      <div className="flex-1">
        <Link href="/" passHref role="button">
          <img
            src={`/logo.svg`}
            alt="Defichain Domains Logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <CustomConnectButton />
        </ul>
      </div>
    </div>
  );
}
