import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";

function useInstances() {
  const { library }: any = useWeb3React();
}

export { useInstances };
