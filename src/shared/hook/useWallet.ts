import { useWeb3React } from "@web3-react/core";



export const useWallet = () => {
  const { activate, chainId, account, library } = useWeb3React();
  const { ethereum }: any = window;

  const fetchBalance = async () => {
    try {
      if (account) {
        const balance = await library?.getBalance(account);
        return balance;
      }
    } catch (err) {
      console.error(err)
    }
  }

  const switchEthereum = async (connector: any) => {
    try {
      if (Number(chainId) !== 4) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x4" }],
        });
        activate(connector)
      }
    } catch (err: any) {
      if (err.code === 4902) {
        ethereum
          .request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x4",
                chainName: "Rinkeby Testnet",
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                rpcUrls: ["https://rinkeby.infura.io/v3/"],
                blockExplorerUrls: ["https://rinkeby.etherscan.io"],
              },
            ],
          })
          .then(() => activate(connector))
          .catch((error: any) => {
            console.error(error);
          });
      }
      if (err.code === 4001) {
        localStorage.clear()
      }
    }
  }
  return { switchEthereum, fetchBalance }
}

