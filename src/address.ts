import { request, gql } from 'graphql-request'
import BAD_ADDRESSES from "./data/evil"
import { EthereumAddressInfo, getEthereumInfo } from './ethereum'

export interface AddressInfo {
  advice: "stop" | "warn" | "info"
  message: string
  error: boolean
  knownEvil?: true | undefined
  isSmartContract?: boolean
  meta: {}
}


export default async function addressInfo(address: string, chain: string): Promise<AddressInfo> {
  const celoData = await getCeloExplorerData(address)

  const etherInfo = await getEthereumInfo(address)

  return {
    advice: "info" as const,
    message: "",
    isSmartContract: false,
    error: false,
    meta: {},
    ...generalInfo(celoData, etherInfo),
    ...smartContract(celoData, etherInfo),
    ...provenEvil(address)
  }
}

function smartContract(celoData: AddressQuery, ethereumData: EthereumAddressInfo): Partial<AddressInfo> {
  if (!!celoData?.address?.contractCode) {
    const contractName = celoData?.address?.smartContract?.name
    return {
      advice: "stop",
      isSmartContract: true,
      message: smartContractMessage("Celo", contractName)
    }
  }
  if (!!ethereumData.contractInfo || !!ethereumData.tokenInfo?.address) {
    return {
      advice: "stop",
      isSmartContract: true,
      message: smartContractMessage("Ethereum", ethereumData.tokenInfo?.name)
    }
  }

  return {}
}

function smartContractMessage(network: string, contractName?: string) {
  return `This address belongs to ${contractName || "a"} smart contract on ${network}. Sending tokens to it may result in their loss.`
}



function provenEvil(address: string): Partial<AddressInfo> {
  if (BAD_ADDRESSES.has(address)) {
    return {knownEvil: true, advice: "stop", message: `The address given (${address.substring(0, 12)}...) is known to be malicious`}
  }

  return {}
}

function exchangeOwned(address: string ): Partial<AddressInfo> {
  return {}
}

// has this address been used?
function generalInfo(celoData: AddressQuery, ethereumData: EthereumAddressInfo): Partial<AddressInfo>  {
  if (Number(ethereumData.countTxs) > 0 && !celoData?.address?.transferTxs?.edges?.length) {
    return {
      advice: "warn",
      message: "This address appears to have only been used with Ethereum not Celo. If you have the private key and expect this go for it. If you aren't sure, hold off."
    }
  }

  return {}
}



const query = gql`
  query getAddress($hash: AddressHash!) {
    address(hash: $hash) {
      celoAccount {
        accountType
        name
      }
      celoValidator {
        name
      }
      smartContract {
        name
      }
      contractCode
      fetchedCoinBalance
  }
}
`

interface AddressQuery {
  address: {
    celoAccount: {
      accountType: string
      name?:string
    },
    smartContract?: {
      name?: string
    }
    contractCode?: string
    fetchedCoinBalance: number
    transferTxs: {
      edges: Array<{
        node: {
          timestamp: string
        }
      }>
    }
  }
}

async function getCeloExplorerData(address: string) {
  try {
    const data =  await request<AddressQuery>("https://explorer.celo.org/graphiql", query, {hash: address})
    return data
  } catch (error) {
    return  {}
  }
}

//  Todo Look for TXs on celo if none and some exist on Ethereum give a warning.