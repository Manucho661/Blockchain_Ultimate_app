import { useState } from "react";
import { connectWallet } from "../utils/connectWallet";

export default function WalletLogin() {
  const [wallet, setWallet] = useState(null);

  const handleConnect = async () => {
    const account = await connectWallet();
    setWallet(account);
  };

  return (
    <div>
      <button onClick={handleConnect}>Connect Wallet</button>
      {wallet && <p>Connected: {wallet}</p>}
    </div>
  );
}
