
import axios from 'axios';
import BigNumber from 'bignumber.js';


export const URL_TERMS = 'https://powercity.io/new/#'
export const URL_PRIVACY_POLICY = 'https://powercity.io/new/#'
export const URL_READ_MORE = 'https://powercity.io/new/#'

export const URL_READ_MORE_TROVE: UrlPath<string> = "https://docs.liquity.org/faq/borrowing#what-is-a-trove";
export const URL_READ_MORE_SP: UrlPath<string> = "https://docs.liquity.org/faq/stability-pool-and-liquidations#what-is-the-stability-pool";
export const URL_READ_MORE_STAKING: UrlPath<string> = "https://docs.liquity.org/faq/staking#how-does-staking-work-in-liquity";



export const formatAddress = (walletAddress?: any, numOfCharsL=6, numOfCharsR=4) => {
    const address = walletAddress?.toString();

    const formattedAddress = `${address?.substr(0, numOfCharsL)}...${address?.substr(
        address.length - numOfCharsR,
        address.length
    )}`;

    return formattedAddress;
};

export type Uuid = string
export type Hash = string
export type UrlPath<T> = string & { _?: T } // Basically a string.  The second clause is to peg the generic type

export function matchesPath(path: string, value: string, exact: boolean): boolean {
    const generalized = path.replace(/:\w+/g, '[^/]*?')
    const pattern = `^${generalized}${exact ? '$' : ''}`
    const regex = new RegExp(pattern)
    return !!value.match(regex)
}

export const validateNumberInput = (e: any) => {
    let { value, max } = e.target;
    if (max) {
        value = Math.min(Number(max), Number(value))
    }
    return value
}

export const ethToUSD = async()=>{
    const value = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cliquity%2Cliquity-usd&vs_currencies=usd');
    return value.data.ethereum.usd;
}

export const sendToContract = (value:string,decimal:number) =>{
 return new BigNumber(value).times(10 ** decimal).toFixed(0) 
}

export const receiveFromContract = (value:string,decimal:number,fixed:number) =>{
    return  new BigNumber(value).dividedBy(10 ** decimal).toFixed(fixed)
}


export const TROVE_INFO_TEXT: string = 'You can borrow LUSD by opening a Trove.'
export const SP_INFO_TEXT: string = 'You can earn ETH and LQTY rewards by depositing LUSD.'
export const STAKING_INFO_TEXT: string = 'Stake LQTY to earn a share of borrowing and redemption fees.'

export const TROVE_READ_MORE_TEXT: string = 'What is a Trove'
export const SP_READ_MORE_TEXT: string = 'What is the Stability Pool'
export const STAKING_READ_MORE_TEXT: string = 'How does Staking work'

export const BORROWING_FEE_TEXT: string = "The Borrowing Fee is a one-off fee charged as a percentage of the borrowed amount (in LUSD) and is part of a Trove's debt. The fee varies between 0.5% and 5% depending on LUSD redemption volumes."
export const TVL_TEXT: string = "The Total Value Locked (TVL) is the total value of Ether locked as collateral in the system, given in ETH and USD."
export const TROVES_TEXT: string = "The total number of active Troves in the system."
export const LUSD_SUPPLY_TEXT: string = "The total LUSD minted by the Liquity Protocol."
export const LUSD_IN_POOL_TEXT: string = "The total LUSD currently held in the Stability Pool, expressed as an amount and a fraction of the LUSD supply."
export const STAKED_LQTY_TEXT: string = "The total amount of LQTY that is staked for earning fee revenue."
export const TCR_TEXT: string = "The ratio of the Dollar value of the entire system collateral at the current ETH:USD price, to the entire system debt."
export const RECOVERY_MODE_TEXT: string = "Recovery Mode is activated when the Total Collateral Ratio (TCR) falls below 150%. When active, your Trove can be liquidated if its collateral ratio is below the TCR. The maximum collateral you can lose from liquidation is capped at 110% of your Trove's debt. Operations are also restricted that would negatively impact the TCR."
export const CR_TEXT: string = "The ratio between the dollar value of the collateral and the debt (in LUSD) you are depositing. While the Minimum Collateral Ratio is 110% during normal operation, it is recommended to keep the Collateral Ratio always above 150% to avoid liquidation under Recovery Mode. A Collateral Ratio above 200% or 250% is recommended for additional safety."
export const REWARD_TEXT: string = "Although the LQTY rewards accrue every minute, the value on the UI only updates when a user transacts with the Stability Pool. Therefore you may receive more rewards than is displayed when you claim or adjust your deposit."
