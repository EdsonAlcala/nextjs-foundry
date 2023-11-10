# Build On Base Boilerplate (BoBB)

Simple and minimalistic Next.js + Foundry boilerplate to start developing on Base.

The project contains ....

op-viem

op-wagmi

Opinionated

<!-- <TODO: add image or .gif> -->

<!-- TODO: INCLUDE something related to: 
By building a developer-first wallet, we can encourage developers to follow the best practice of introspection, testing, debugging against a local (forked) Ethereum node. -->

### Requirements

- [NVM](https://github.com/nvm-sh/nvm)
- [Foundry](https://github.com/foundry-rs/foundry)

To include an alchemy provider is required
To include a note about wallet connect id
<!-- Note: Every dApp that relies on WalletConnect now needs to obtain a projectId from WalletConnect Cloud. This is absolutely free and only takes a few minutes. -->

## Architecture 📦

The project consist of 2 packages:

- [Next](./packages/next) - Next.js 14.0.2, with App router
- [Foundry](./packages/foundry/) - Foundry project

### Inspiration

- [Scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2)
- [Nexth](https://github.com/wslyvh/nexth)

### Getting started

```bash
$ git clone <TODO>

$ nvm use

$ yarn
```

Known issues
https://github.com/foundry-rs/forge-std/issues/170