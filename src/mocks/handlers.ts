import { rest, graphql } from 'msw'
import { CEL0_SMART_CONTRACT, CELO_ACCOUNT, ETH_ACCOUNT, ETH_SMART_CONTRACT, UNUSED } from '../test/test-addresses'

export const handlers = [
  // Handles a GET /user request
  rest.get('https://api.ethplorer.io/getAddressInfo/:address', (req, res, ctx) => {

    const address = req.params.address

    switch (address) {

      case UNUSED:
      return res(
        ctx.json({
          address: address,
          ETH: {
            price: {
              rate: 3934.81505154183,
              diff: -4.81,
              diff7d: -5.58,
              ts: 1635378782,
              marketCapUsd: 464713351853.4885,
              availableSupply: 118102971.999,
              volume24h: 26168965467.052486,
              diff30d: 31.161009237449605,
              volDiff1: 52.52011199879897,
              volDiff7: 8.47899869624402,
              volDiff30: -17.9189388973453
            },
            balance: 0,
            rawBalance: '0'
          },
          countTxs: 0
        })
      )

      case ETH_ACCOUNT:

      return res(
        ctx.json({
          address: '0xad5dc090223b3f6b9a47c354b808ff593ffa1e25',
          ETH: {
            price: {
              rate: 3934.81505154183,
              diff: -4.81,
              diff7d: -5.58,
              ts: 1635378782,
              marketCapUsd: 464713351853.4885,
              availableSupply: 118102971.999,
              volume24h: 26168965467.052486,
              diff30d: 31.161009237449605,
              volDiff1: 52.52011199879897,
              volDiff7: 8.47899869624402,
              volDiff30: -17.9189388973453
            },
            balance: 0,
            rawBalance: '0'
          },
          countTxs: 0
        })
      )
    case ETH_SMART_CONTRACT:
      return res(
        ctx.json({
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          ETH: {
            price: {
              rate: 3932.6999346037815,
              diff: -4.83,
              diff7d: -5.34,
              ts: 1635379382,
              marketCapUsd: 464463550256.97955,
              availableSupply: 118102971.999,
              volume24h: 26149834123.38994,
              diff30d: 31.090505066703116,
              volDiff1: 52.52011199879897,
              volDiff7: 8.47899869624402,
              volDiff30: -17.9189388973453
            },
            balance: 0,
            rawBalance: '0'
          },
          countTxs: 15351518,
          contractInfo: {
            creatorAddress: '0x95ba4cf87d6723ad9c0db21737d862be80e93911',
            transactionHash: '0xe7e0fe390354509cd08c9a0168536938600ddc552b3f7cb96030ebef62e75895',
            timestamp: 1533324504
          },
          tokenInfo: {
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            name: 'USD Coin',
            decimals: '6',
            symbol: 'USDC',
            totalSupply: '29734603971329550',
            owner: '0xfcb19e6a322b27c06842a71e8c725399f049ae3a',
            lastUpdated: 1635378897,
            slot: 9,
            storageTotalSupply: 'b',
            issuancesCount: 6651,
            holdersCount: 1213582,
            image: '/images/usdc.png',
            website: 'https://www.circle.com/en/usdc',
            links: 'https://github.com/centrehq\r\nhttps://medium.com/centre-blog',
            coingecko: 'usd-coin',
            ethTransfersCount: 0,
            price: {
              rate: 1.00027335865081,
              diff: 0.01,
              diff7d: 0.06,
              ts: 1635379145,
              marketCapUsd: 32595877698.94374,
              availableSupply: 32586969768.853745,
              volume24h: 5829428896.922255,
              diff30d: -0.00810131742412068,
              volDiff1: 59.63404342125813,
              volDiff7: 41.87238969979833,
              volDiff30: 6.877769678156852,
              currency: 'USD'
            },
            publicTags: [ 'Stablecoins' ]
          },
          tokens: [
            {
              tokenInfo: [Object],
              balance: 66193790874281230000,
              totalIn: 0,
              totalOut: 0,
              rawBalance: '66193790874281230000'
            },
            {
              tokenInfo: [Object],
              balance: 10000000000,
              totalIn: 0,
              totalOut: 0,
              rawBalance: '10000000000'
            }
          ]
        }
      ))
    default:
      return res(
        ctx.json({
          address,
          ETH: {
            price: {
              rate: 3934.81505154183,
              diff: -4.81,
              diff7d: -5.58,
              ts: 1635378782,
              marketCapUsd: 464713351853.4885,
              availableSupply: 118102971.999,
              volume24h: 26168965467.052486,
              diff30d: 31.161009237449605,
              volDiff1: 52.52011199879897,
              volDiff7: 8.47899869624402,
              volDiff30: -17.9189388973453
            },
            balance: 1000,
            rawBalance: '1000'
          },
          countTxs: 5
        })
      )
    }
  }),
  graphql.query("getAddress", (req, res, ctx) => {
    console.info(req.variables)

    const address = req.variables.hash

    switch (address){
      case CEL0_SMART_CONTRACT:
        return res(ctx.data({
          address: {
            celoAccount: null,
            celoValidator: null,
            contractCode: '0x60806040526004361061004a5760003560e01c806303386ba3146101e757806342404e0714610280578063bb913f41146102d7578063d29d44ee14610328578063f7e6af8014610379575b6000600160405180807f656970313936372e70726f78792e696d706c656d656e746174696f6e00000000815250601c019050604051809103902060001c0360001b9050600081549050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610136576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4e6f20496d706c656d656e746174696f6e20736574000000000000000000000081525060200191505060405180910390fd5b61013f816103d0565b6101b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c696420636f6e74726163742061646472657373000000000000000081525060200191505060405180910390fd5b60405136810160405236600082376000803683855af43d604051818101604052816000823e82600081146101e3578282f35b8282fd5b61027e600480360360408110156101fd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561023a57600080fd5b82018360208201111561024c57600080fd5b8035906020019184600183028401116401000000008311171561026e57600080fd5b909192939192939050505061041b565b005b34801561028c57600080fd5b506102956105c1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e357600080fd5b50610326600480360360208110156102fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061060d565b005b34801561033457600080fd5b506103776004803603602081101561034b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107bd565b005b34801561038557600080fd5b5061038e610871565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561041257506000801b8214155b92505050919050565b610423610871565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f73656e64657220776173206e6f74206f776e657200000000000000000000000081525060200191505060405180910390fd5b6104cc8361060d565b600060608473ffffffffffffffffffffffffffffffffffffffff168484604051808383808284378083019250505092505050600060405180830381855af49150503d8060008114610539576040519150601f19603f3d011682016040523d82523d6000602084013e61053e565b606091505b508092508193505050816105ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f696e697469616c697a6174696f6e2063616c6c6261636b206661696c6564000081525060200191505060405180910390fd5b5050505050565b600080600160405180807f656970313936372e70726f78792e696d706c656d656e746174696f6e00000000815250601c019050604051809103902060001c0360001b9050805491505090565b610615610871565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f73656e64657220776173206e6f74206f776e657200000000000000000000000081525060200191505060405180910390fd5b6000600160405180807f656970313936372e70726f78792e696d706c656d656e746174696f6e00000000815250601c019050604051809103902060001c0360001b9050610701826103d0565b610773576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c696420636f6e74726163742061646472657373000000000000000081525060200191505060405180910390fd5b8181558173ffffffffffffffffffffffffffffffffffffffff167fab64f92ab780ecbf4f3866f57cee465ff36c89450dcce20237ca7a8d81fb7d1360405160405180910390a25050565b6107c5610871565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610865576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f73656e64657220776173206e6f74206f776e657200000000000000000000000081525060200191505060405180910390fd5b61086e816108bd565b50565b600080600160405180807f656970313936372e70726f78792e61646d696e000000000000000000000000008152506013019050604051809103902060001c0360001b9050805491505090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610960576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6f776e65722063616e6e6f74206265203000000000000000000000000000000081525060200191505060405180910390fd5b6000600160405180807f656970313936372e70726f78792e61646d696e000000000000000000000000008152506013019050604051809103902060001c0360001b90508181558173ffffffffffffffffffffffffffffffffffffffff167f50146d0e3c60aa1d17a70635b05494f864e86144a2201275021014fbf08bafe260405160405180910390a2505056fea165627a7a72305820757fbf66f2e45da624100ffcfa4c3d02a7dce19cf5ba8edf1e2984b9e620118c0029',
            fetchedCoinBalance: '311922899999999987133',
            smartContract: { name: 'GoldTokenProxy' }
          }
        }))
      case CELO_ACCOUNT:
        return res(ctx.data({
          address: {
            celoAccount: null,
            celoValidator: null,
            contractCode: null,
            fetchedCoinBalance: '1914843438148032837135318',
            smartContract: null
          }
        }))
      case UNUSED:
        return res(ctx.data({
          address: {
            celoAccount: null,
            celoValidator: null,
            contractCode: null,
            fetchedCoinBalance: '0',
            smartContract: null
          }
        }))
      default:
        return res(
          ctx.data({address: {
            celoAccount: {
              accountType: "",
            },
            smartContract: null,
            contractCode: "",
            fetchedCoinBalance: 1,
            transferTxs: {
              edges: []
            }
          }}),
        )
    }


  })
]