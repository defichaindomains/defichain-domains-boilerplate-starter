import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import DomainNameResolver from "./DomainNameResolver";
import { useDisconnect, useAccount, useProvider } from "wagmi";
import Link from "next/link";

export const CustomConnectButton = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {openConnectModal && (
        <button onClick={openConnectModal} className="btn btn-primary">
          Connect Wallet
        </button>
      )}
      {openAccountModal && (
        <div className="dropdown dropdown-hover dropdown-end text-right">
          <label tabIndex={0} className="btn lowercase  btn-primary">
            {address && <DomainNameResolver address={address} />}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link href={`/account/${address}`}>Profile</Link>
            </li>
            <li>
              <a onClick={disconnect}>Disconnect</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
