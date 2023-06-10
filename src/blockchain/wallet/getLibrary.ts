import {ethers} from 'ethers' 

export default function getLibrary(provider:any) {
  const library = new ethers.providers.Web3Provider(provider);
  return library;
}