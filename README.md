# Address Check

*A tool to help make sending to wrong address less likely thru warnings*

At the moment This is more a proof of concept than an actual service / library. My Intention is to inspire others to implement these kind of checks anywhere celo is sent.

Options for making this production ready

* Turn existing code into a service (would need to be pay fee since it uses paid APIs)
* Package as an npm package

## Interface

Input should be a 0x based address.

Output will consist of the

```typscript

interface AddressInfo {
  advice: "stop" | "warn" | "info"
  message: string
  error: boolean
  knownEvil?: true | undefined
  isSmartContract?: boolean
  meta: {}
}

```

`advice` these are intended to be used to. it is recommended to use different symbols and colors when displaying messages for each advice type.

* "stop" SHOULD be displayed as the most severe. The likelihood of continuing being the best option is very low
* "warn" SHOULD be displayed as a moderate warning. It is possible in some cases that continuing is the right option but encourage user to reassess.
* "info" SHOULD be displayed as as being without value judgement. It is NOT to be interpreted as meaning everything is OK, merely that there isn't any evidence to the contrary.

`message` This is a human message that explains as best possible what is going on.

`error` This is true if the request of considered bad such as using wrong method or if the string passed is not an Ox address

`knownEvil` This is either true or undefined. It returns undefined and not false because just because something isn't known to be a bad address doesn't meant it is good. This is taking from the [MyEtherWallet Darklist](https://github.com/MyEtherWallet/ethereum-lists/blob/master/src/addresses/addresses-darklist.json) and can be found in src/data/evil.ts

`isSmartContract` if an address was found to be a smart contract on either Celo or Ethereum this will be true and the advice level will be stop

`meta` This object is placeholder which may contain other info about the service in the future but which can be ignored for now.
