import Link from "next/link";
import React from "react";

import { useAccount } from "wagmi";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>🚀 Defichain Domains</p>
      </div>
    </footer>
  );
}
