# Build On Base Boilerplate (BoBB)

Simple, minimalistic and opinionated Next.js + Foundry boilerplate to start developing on Base.

This boilerplate is designed to be used to develop DApps using Foundry, Next JS, Anvil, RainbowKit, Rivet. This means you will test against a local forked Base node.

### Requirements

- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [Foundry](https://github.com/foundry-rs/foundry)
- [Alchemi provider](https://www.alchemy.com/)
- [Wallet connect id](https://cloud.walletconnect.com/sign-in)

*Note: Since it is free and only takes a few minutes, we recommend getting a projectId from WalletConnect Cloud.

## Architecture 📦

The project consist of 2 packages:

- [Next](./packages/next) - Next.js 14.0.2, with App router
- [Foundry](./packages/foundry/) - Foundry project

### Inspiration

- [Scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2)
- [Nexth](https://github.com/wslyvh/nexth)

### Getting started

```bash
$ git clone https://github.com/edsonalcala/base-boilerplate

$ nvm use

$ yarn
```

### Start Anvil

https://book.getfoundry.sh/reference/anvil/

### Developing with Rivet

We recommend https://www.paradigm.xyz/2023/08/rivet

### Roadmap

[] Add gif image in the README
[] Add support for op-wagmi

### Known issues

https://github.com/foundry-rs/forge-std/issues/170
https://github.com/foundry-rs/foundry/issues/2714

https://github.com/nomad-xyz/monorepo

### References

https://nextjs.org/docs/getting-started/installation

https://www.rainbowkit.com/docs/installation#further-examples

