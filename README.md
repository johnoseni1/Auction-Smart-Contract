
## Development

First clone this repository and enter the directory.

Install dependencies:

```
$ yarn
```

## Testing

We use [Hardhat](https://hardhat.dev) and [hardhat-deploy](https://github.com/wighawag/hardhat-deploy)

To run integration tests:

```sh
$ yarn test
```

To run coverage:

```sh
$ yarn coverage
```

To deploy to Rinkeby:
create a secretManager.js containing the required private keys(see secretsManager.example.js) then run:

```sh
$ yarn deploy-rinkeby
```

To verify the auction contract run:

```sh
$ yarn verify-auction [AUCTION-CONTRACT-ADDRESS]
```

