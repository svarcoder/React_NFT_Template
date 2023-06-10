import {useEffect} from 'react';
import { useWeb3React } from '@web3-react/core'
import useAuth, { injected } from './useAuth'


export const useEagerConnect = () => {
  const { login } = useAuth()
  

  useEffect(() => {
    const connectorId = localStorage.getItem('connectorId')
    if (connectorId) {
       login(JSON.parse(connectorId))
        return
      }
      login(connectorId)
  }, [login])
}


export function useInactiveListener(suppress = false) {
const { active, error, activate,deactivate } = useWeb3React();

useEffect(() => {
  const { ethereum } = window as any;
  if (ethereum && ethereum.on && !active && !error && !suppress) {
    const handleChainChanged = (chainId:any)=> {
      activate(injected);
    };

    const handleAccountsChanged = (accounts:any) => {
      if(accounts.length === 0){
        return deactivate()
      }
    };

    const handleNetworkChanged = (networkId:any) => {
      activate(injected);
    };
   
    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", handleAccountsChanged);
    ethereum.on("networkChanged", handleNetworkChanged);

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener("chainChanged", handleChainChanged);
        ethereum.removeListener("accountsChanged", handleAccountsChanged);
        ethereum.removeListener("networkChanged", handleNetworkChanged);
      }
    };
  }

  return () => {};
}, [active, error, suppress, activate]);
}