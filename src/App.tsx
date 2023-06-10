import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Web3ReactProvider } from "@web3-react/core";
import useAuth from "blockchain/wallet/useAuth";
import getLibrary from "blockchain/wallet/getLibrary";

const ConnectWalletButton = () => {
  const { login } = useAuth();
  return <button onClick={() => login(1)}>connect metamask</button>;
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header className="App-header">
          <ConnectWalletButton />
        </header>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
