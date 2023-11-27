# Build On Base Boilerplate (BoBB)

Simple, minimalistic and opinionated [Next.js] + Foundry boilerplate to start developing on Base.

This boilerplate is designed to be used to develop DApps using Foundry, Next JS, Anvil, [RainbowKit] and Rivet. This means you will test against a local forked Base node.

## Requirements

- [NVM]
- [Yarn](https://yarnpkg.com/)
- [Foundry](https://github.com/foundry-rs/foundry)
- [Alchemi provider](https://www.alchemy.com/)
- [Wallet connect id](https://cloud.walletconnect.com/sign-in)*

*Note: Since it is free and only takes a few minutes, we recommend getting a projectId from WalletConnect Cloud.

## Architecture 📦

The project consist of 2 packages:

- [Next](./packages/next) - Next.js 14.0.2, with App router
- [Foundry](./packages/foundry/) - Foundry project

## Getting started

1. Clone the repository and install dependencies

```bash
$ git clone https://github.com/edsonalcala/base-boilerplate

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
yarn start
```

### Start Anvil

https://book.getfoundry.sh/reference/anvil/

## Roadmap

[ ] Include Deployment Script + Wagmi integration

[ ] Add deploy to vercel button

[ ] Add support for op-wagmi

[ ] Setup docs with Tailwind?? I guess with Hugo?

[ ] Add gif image in the README

[ ] Include integration with [Rivet]

[ ] Integrate React Toast or 

[ ] Include [Tailwind] examples

[ ] Include fork mode

## Inspiration

- [Scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2)
- [Nexth](https://github.com/wslyvh/nexth)
- [Nomad](https://github.com/nomad-xyz/monorepo)
- [Prb-Math](https://github.com/PaulRBerg/prb-math)
- [Optimism Starter](https://github.com/ethereum-optimism/optimism-starter)

## Known issues

https://github.com/foundry-rs/forge-std/issues/170
https://github.com/foundry-rs/foundry/issues/2714
https://github.com/nomad-xyz/monorepo

## References

[Next.js]: https://nextjs.org/docs/getting-started/installation
[RainbowKit]: https://www.rainbowkit.com/docs/installation#further-examples
[Tailwind]: https://tailwindui.com/
[NVM]: https://github.com/nvm-sh/nvm
[Yarn]: https://yarnpkg.com/
[Foundry]: https://github.com/foundry-rs/foundry
[Alchemi provider]: https://www.alchemy.com/
[Wallet connect id]: https://cloud.walletconnect.com/sign-in
[Rivet]: https://www.paradigm.xyz/2023/08/rivet