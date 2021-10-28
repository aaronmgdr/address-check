import addressInfo from "../../src/address"
import * as addresses from "./test-addresses"


describe("Address Info", () => {
  describe("when CELO SMART CONTRACT", () => {
    it("returned object has isSmartContract true and message include name of contract (if found)", async () => {
      expect(await addressInfo(addresses.CEL0_SMART_CONTRACT)).toEqual({
        "advice": "stop",
        "error": false,
        "isSmartContract": true,
        "message": "This address belongs to GoldTokenProxy smart contract on Celo. Sending tokens to it may result in their loss.",
        "meta": {},
      })
    })
  })
  describe("when ETHERUM SMART CONTRACT", () => {
    it("returned object has isSmartContract true and message include name of contract (if found)", async () => {
      expect(await addressInfo(addresses.ETH_SMART_CONTRACT)).toEqual({})
    })
  })

  describe("when known evil", () => {
    it("returned object has advice of stop and message about how this address is not to be trusted", async () => {
      expect(await addressInfo(addresses.KNOWN_EVIL)).toEqual({
        "advice": "stop",
        "error": false,
        "isSmartContract": false,
        "knownEvil": true,
        "message": "The address given (0xf9a5139E42...) is known to be malicious",
        "meta": {},
      })
    })
  })

  describe("when has activity on Celo", () => {
    it("returned object has advice level of info", async () => {
      expect(await addressInfo(addresses.CELO_ACCOUNT)).toEqual({
        "error": false,
        "isSmartContract": false,
        advice: "warn",
        message: "This address has been interacted with on Celo. It has a balance of 11742.199",
        meta: {}
      })
    })
  })

  describe("when has activity on ETHEREUM (and not on Celo)", () => {
    it("returned object has advice of warn", async () => {
      expect(await addressInfo(addresses.ETH_ACCOUNT)).toEqual({})
    })
  })


  describe("when nothing found", () => {
    it("returned object has advice of info", async () => {
      expect(await addressInfo(addresses.UNUSED)).toEqual({
        "error": false,
        "isSmartContract": false,
        advice: "warn",
        message: "Could not find any history for this address on Celo or Ethereum. It could be new.",
        meta: {}
      })
    })
  })
})