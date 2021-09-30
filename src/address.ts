import { request, gql } from 'graphql-request'

interface AddressInfo {
  advice: "stop" | "warn" | "info"
  message: string
  knownEvil?: true | null
  ens?: any
  nomspace?: any
  isSmartContract: boolean

  meta: {}
}


export default async function addressInfo(address: string, chain: string): Promise<AddressInfo> {
  const celoData = await getCeloExplorerData(address)

  !!celoData.address.contractCode

  return {
    advice: "info" as const,
    message: "",
    isSmartContract: false,
    meta: {},
    ...smartContract(celoData)
  }
}

function smartContract(celoData: AddressQuery): Partial<AddressInfo> {
  if (!!celoData.address.contractCode) {
    const contractName = celoData.address.smartContract?.name
    return {
      advice: "warn",
      isSmartContract: true,
      message: `This address belongs to ${contractName || "a"} smart contract. Sending tokens my result in their loss if the contract is not intended to receive in this way.`
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
  }
}

async function getCeloExplorerData(address: string) {
  const data =  await request<AddressQuery>("https://explorer.celo.org/graphiql", query, {hash: address})
  return data
}