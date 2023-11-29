# Build On Base Boilerplate (BoBB)

Simple, minimalistic and opinionated [Next.js] + [Foundry] boilerplate to start developing Onchain Apps on Base.

This boilerplate is designed to work with the following stack:

- [Foundry]
- [Next.js] - Next.js 14.0.2, with App router
- [Anvil]
- [RainbowKit]
- [Op-Wagmi]

## Features

- Automatic react hook generation
- Wallet integration
- Next.JS app router integration

## Requirements

- [NVM]
- [Yarn]
- [Foundry]
- [Alchemy provider]
- [Wallet connect id]

*Note: Since WalletConnect requires a projectId and it is free and easy to get, we recommend getting a projectId from WalletConnect Cloud.

## Architecture 📦

The project consist of 2 packages:

- [App](./packages/app) - Next.js 14.0.2, with App router
- [Foundry](./packages/foundry/) - Smart contract project

## Getting started

1. Clone the repository and install dependencies

```bash
$ git clone https://github.com/edsonalcala/dapp-boilerplate

$ nvm use

$ yarn
```

2. Start Anvil by running:

```bash
yarn chain
```

3. On a second terminal, deploy the smart contracts contract to the local `Anvil` instance by running:

```bash
yarn deploy
```

4. On a new terminal, start the NextJS app by running:

```bash
yarn dev
```

## Roadmap

[ ] Add deploy to vercel button

[ ] Add support for op-wagmi

[ ] Integrate [React hot toast] or [React toastify]

## Inspiration

- [Scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2)
- [Nexth](https://github.com/wslyvh/nexth)
- [Nomad](https://github.com/nomad-xyz/monorepo)
- [Prb-Math](https://github.com/PaulRBerg/prb-math)
- [Optimism Starter](https://github.com/ethereum-optimism/optimism-starter)

<!-- ## References -->

[Next.js]: https://nextjs.org/docs/getting-started/installation
[RainbowKit]: https://www.rainbowkit.com/docs/installation#further-examples
[Tailwind]: https://tailwindui.com/
[NVM]: https://github.com/nvm-sh/nvm
[Yarn]: https://yarnpkg.com/
[Foundry]: https://github.com/foundry-rs/foundry
[Alchemy provider]: https://www.alchemy.com/
[Wallet connect id]: https://cloud.walletconnect.com/sign-in
[Rivet]: https://www.paradigm.xyz/2023/08/rivet
[React toastify]: https://www.npmjs.com/package/react-toastify
[React hot toast]: https://react-hot-toast.com/
[Anvil]: https://book.getfoundry.sh/reference/anvil/
[Op-Wagmi]: https://github.com/base-org/op-wagmi
