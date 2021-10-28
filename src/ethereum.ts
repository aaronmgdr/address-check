

const BASE_URL = "https://api.etherscan.io/api"

const API_KEY = process.env.ETHERSCAN_KEY

interface Basic {
  address: string
  action: string
}

interface EtherScanResponse<T> {
  status:"1" | "0"
  message: "OK" | "NOTOK"
  result: T
}

interface TXList {
  "blockNumber": string
  "timeStamp": string
  "hash": string
  "nonce": string
  "blockHash": string
  "transactionIndex": string
  "from": string
  "to": string
  "value": string
  "gas": string
  "gasPrice": string
  "isError": string
  "txreceipt_status": string
  "input": string
  "contractAddress": string
  "cumulativeGasUsed": string
  "gasUsed": string
  "confirmations": string
}

async function basic<T>({address, action}: Basic):Promise<EtherScanResponse<T>> {
  const response = await fetch(`${BASE_URL}?module=account&action=${action}&address=${address}&tag=latest&apikey=${API_KEY}`)
  return response.json()
}


export async function getEtherBalance(address: string) {
  return basic<string>({address, action: "balance"})
}

export async function hasTransacted(address: string) {
  return basic<TXList[]>({address, action: "txlist"})
}

export interface EthereumAddressInfo {
  address: string //# address,
  ETH: {  //# ETH specific information
      balance:    string //# ETH balance (integer, maybe slightly inaccurate on huge numbers)
      rawBalance: string //# raw ETH balance (as is in the blockchain, integer in string format)
      totalIn:    string //# Total incoming ETH value (showETHTotals parameter should be set to get this value)
      totalOut:   string //# Total outgoing ETH value (showETHTotals parameter should be set to get this value)
  },
  contractInfo?: {   //# exists if specified address is a contract
     creatorAddress:  string //# contract creator address,
     transactionHash: string //# contract creation transaction hash,
     timestamp:       string //# contract creation timestamp
  },
  tokenInfo?:  {
    address: string
    name: string
    symbol: string
  } //# exists if the specified address is a token contract address
  tokens?: Token[]   //# exists if the specified address has any token balances
  countTxs:    string //# Total count of incoming and outgoing transactions (including creation one),
}

interface Token {
  tokenInfo: string //# token data
  balance:    string //# token balance (integer, maybe slightly inaccurate on huge numbers)
  rawBalance: string //# raw token balance (as is in the blockchain, integer in string format)
  totalIn:   string //# total incoming token value
  totalOut:  string //# total outgoing token value
}


const ETHPLORER_URL = "https://api.ethplorer.io"

export async function getEthereumInfo(address: string): Promise<EthereumAddressInfo> {
  const response = await fetch(`${ETHPLORER_URL}/getAddressInfo/${address}?apiKey=${process.env.ETHPLORER_KEY}`)

  const json = await response.json()
  console.log(json)
  return json
}