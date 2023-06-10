import { useCallback, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
// import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { useWallet } from "shared/hook/useWallet";

export const injected = new InjectedConnector({
  supportedChainIds: [4],
});

let walletconnect: any = new WalletConnectConnector({
  rpc: {
    // 1: "https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99",
    4: "https://rinkeby.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99",
  },
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
  // chainId: 1
});

const useAuth = () => {
  const { activate, deactivate, library, account, chainId, active }: any =
    useWeb3React();

  const { switchEthereum } = useWallet();

  const login = useCallback(
    (connectorID: any) => {
      const selecWallet = (type: number): any => {
        switch (type) {
          case 1:
            return injected;
          case 2:
            return walletconnect;
        }
      };

      if (true) {
        activate(selecWallet(connectorID), async (error: any) => {
          if (error instanceof UnsupportedChainIdError) {
            if (connectorID === 1) {
              switchEthereum(injected);
            } else if (connectorID === 2) {
              deactivate();
              localStorage.clear();
            }
            activate(selecWallet(connectorID));
          } else {
            if (error instanceof NoEthereumProviderError) {
              console.error("install metamask!");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              //@ts-ignore
              walletconnect.walletConnectProvider = null;
              localStorage.clear();
              console.error(error);
            } else {
              console.error(error.name, error.message);
              localStorage.clear();
            }
          }
        });
      } else {
      }
    },
    [activate, library]
  );

  const logout = useCallback(() => {
    deactivate();
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    if (walletType === 2 && walletconnect) {
      walletconnect?.close();
      walletconnect.walletConnectProvider = null;
    }
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
