<!--
  CAUTION: This file is automatically generated. Do not edit it manually!
  To adjust it, change the sdk-readme code generator or its template
-->
<div align="center">
    <a align="center" href="https://moralis.io" target="_blank">
      <img src="https://github.com/MoralisWeb3/Moralis-JS-SDK/raw/main/assets/moralis-logo.svg" alt="Moralis JS SDK" height=200/>
    </a>
    <h1 align="center">Moralis SDK (JavaScript / TypeScript)</h1>
    <a href="https://discord.gg/moralis" target="_blank">
      <img alt="Join the Moralis DAO on Discord" src="https://img.shields.io/discord/819584798443569182?color=7289DA&label=Discord&logo=discord&logoColor=ffffff">
    </a>
    <a href="https://docs.moralis.io" target="_blank">
      <img alt="Check the docs" src="https://img.shields.io/badge/Docs-Full Documentation-21BF96?style=flat&logo=gitbook&logoColor=ffffff">
    </a>
    <a href="https://forum.moralis.io" target="_blank">
      <img alt="Discourse posts" src="https://img.shields.io/discourse/posts?color=B7E803&label=Forum&logo=discourse&server=https%3A%2F%2Fforum.moralis.io">
    </a><br/>
    <a href="https://www.npmjs.com/package/moralis"><img alt="npm" src="https://img.shields.io/npm/v/moralis?label=version"></a>
    <img src="https://img.shields.io/github/last-commit/MoralisWeb3/Moralis-JS-SDK">
    <img src="https://img.shields.io/bundlephobia/minzip/moralis">
    <img src="https://img.shields.io/npm/types/moralis">
  <p>
  </p>
  <p>
    The most powerful Web3 library for your backend in Javascript and Typescript.
  </p>
  <br/>
</div>

---

**Features**:

- Web3 authentication
- Make **Evm API** and **Solana API** calls
- Subscribe to real-time blockchain updates via **Streams**
- Consistent data types and utilities
- **Modular** package: include only what you need
- Fully **Typescript** ready out-of-the box

... and much more. Check the [official Moralis docs](https://docs.moralis.io/) for more details.

# 🚀 Quick start

If you're new to Moralis, check the [quickstart guide in the official docs](https://docs.moralis.io/docs/quickstart) on how to get started.

If you're already familiar with Moralis and have your server set up. Then follow along to connect your SDK:

## 1. Install Moralis

The easiest way to integrate the Moralis SDK into your JavaScript project is through the npm module.

Install the package via `npm`:

```shell
npm install moralis
```

or `yarn`:

```shell
yarn add moralis
```

Import Moralis:

```js
import Moralis from 'moralis';
```

## 2. Initialize Moralis

After your dependency is added, you simply need to initialize moralis via the `start` method:

> **⚠️ Warning**: Make sure to keep your api key private

```javascript
Moralis.start({
  apiKey: 'YOUR_API_KEY',
});
```

After that you can use any Moralis functionalities as described in our [extensive docs](https://docs.moralis.io)

# ⭐️ Star us

If this JS SDK helps you build your dapps faster - please star this project, every star makes us very happy!

# 🤝 Need help

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io). The best thing about this SDK is the super active community ready to help at any time! We help each other.

# 🧭 Table of Contents

- [🚀 Quick start](#-quick-start)
  - [1. Install Moralis](#1-install-moralis)
  - [2. Initialize Moralis](#2-initialize-moralis)
- [⭐️ Star us](#️-star-us)
- [🤝 Need help](#-need-help)
- [🧭 Table of Contents](#-table-of-contents)
- [⚙️ Configuration](#️-configuration)
- [👩‍🔬 Advanced setup](#-advanced-setup)
  - [1. Install the dependencies](#1-install-the-dependencies)
- [📦 Packages](#-packages)
- [🧙‍♂️ Community](#️-community)

# ⚙️ Configuration

When calling `Moralis.start`, you can include a configuration object.

# 👩‍🔬 Advanced setup

It's possible to install all functionalities of Moralis by installing `moralis` as a dependency. But, you may choose to only install certain modules (as listed below).

## 1. Install the dependencies

Instead of installing `moralis` you can need to install the packages that you want to use. You always need to install the `@moralisweb3/common-core` package. For example:

```shell
yarn add @moralisweb3/common-core @moralisweb3/evm-api
```

Then at the top of your code (before any interaction with Moralis), you need to register the modules to the core package

```javascript
import { Core } from '@moralisweb3/common-core';
import { EvmApi } from '@moralisweb3/evm-api';

const core = Core.create();
// Register all imported modules to the @moralisweb3/common-core module
core.registerModules([EvmApi]);
```

Then, initialize the app the same way as when using the umbrella `moralis` package. You only need to provide configuration that is required by the packages. So if you don't include an api package, then you might not need to include the apiKey.

```javascript
core.start({
  apiKey: 'YOUR_API_KEY',
  // ...and any other configuration
});
```

Now you can use any functionality from the installed modules. The only difference is that you need to call in your code:

```ts
import { EvmApi } from '@moralisweb3/evm-api';

const evmApi = core.getModule<EvmApi>(EvmApi.moduleName);
evmApi.block.getBlock();
```

Instead of

```javascript
import Moralis from 'moralis';

Moralis.EvmApi.block.getBlock();
```

Of course you are free to combine the modules in a single object, and use that in your dapp.

```javascript
// moralis.ts
import { Core } from '@moralisweb3/common-core';
import { EvmApi } from '@moralisweb3/evm-api';

const core = Core.create();
const evmApi = EvmApi.create(core);
core.registerModules([evmApi]);

export const Moralis = {
  EvmApi: evmApi,
};

// app.ts
import { Moralis } from './moralis/';

Moralis.EvmApi.block.getBlock();
```

# 📦 Packages

## Main modules

The main modules of the SDK

| package                               | changelog                               | description                                                                                 |
| ------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------- |
| [moralis](packages/moralis/README.md) | [CHANGELOG.md](packages/moralis/CHANGELOG.md) | The main package of Moralis containing all features. You probably are looking for this one. |

## Integrations

Integrations with frameworks and services

| package                                                     | changelog                                   | description                            |
| ----------------------------------------------------------- | ------------------------------------------- | -------------------------------------- |
| [@moralisweb3/next](packages/next/README.md)                | [CHANGELOG.md](packages/next/CHANGELOG.md)        | Integration of Moralis in NextJs       |
| [@moralisweb3/parse-server](packages/parseServer/README.md) | [CHANGELOG.md](packages/parseServer/CHANGELOG.md) | Integration of Moralis in parse-server |

## Features

Feature modules. Only use these directly for advanced use-cases, the prefered way is to use these features via the umbrella package &quot;moralis&quot;

| package                                            | changelog                               | description                                                 |
| -------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------- |
| [@moralisweb3/auth](packages/auth/README.md)       | [CHANGELOG.md](packages/auth/CHANGELOG.md)    | Authenticate via web3                                       |
| [@moralisweb3/evm-api](packages/evmApi/README.md)  | [CHANGELOG.md](packages/evmApi/CHANGELOG.md)  | Make calls to the Evm blockchain via Moralis Evm Apis       |
| [@moralisweb3/sol-api](packages/solApi/README.md)  | [CHANGELOG.md](packages/solApi/CHANGELOG.md)  | Make calls to the Solana blockchain via Moralis Solana Apis |
| [@moralisweb3/streams](packages/streams/README.md) | [CHANGELOG.md](packages/streams/CHANGELOG.md) | Subscribe to realtime data from the blockchain              |

## Core modules

Core modules are the building blocks of Moralis.

| package                                                    | changelog                                   | description                       |
| ---------------------------------------------------------- | ------------------------------------------- | --------------------------------- |
| [@moralisweb3/common-core](packages/common/core/README.md) | [CHANGELOG.md](packages/common/core/CHANGELOG.md) | All core logic related to the SDK |

## Utilities

Utilities, types, operations and datatypes related used by other modules.

| package                                                                     | changelog                                           | description                                                   |
| --------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| [@moralisweb3/api-utils](packages/apiUtils/README.md)                       | [CHANGELOG.md](packages/apiUtils/CHANGELOG.md)            | Utilities and types to handle logic for api calls             |
| [@moralisweb3/client-api-utils](packages/client/apiUtils/README.md)         | [CHANGELOG.md](packages/client/apiUtils/CHANGELOG.md)     | Client-side utilities for api calls                           |
| [@moralisweb3/client-evm-api](packages/client/evmApi/README.md)             | [CHANGELOG.md](packages/client/evmApi/CHANGELOG.md)       | Client-side logic for making Evm Api calls                    |
| [@moralisweb3/client-sol-api](packages/client/solApi/README.md)             | [CHANGELOG.md](packages/client/solApi/CHANGELOG.md)       | Client-side logic for making Solana Api calls                 |
| [@moralisweb3/common-aptos-utils](packages/common/aptosUtils/README.md)     | [CHANGELOG.md](packages/common/aptosUtils/CHANGELOG.md)   | Utilities, operations, datatypes and types related to Aptos   |
| [@moralisweb3/common-auth-utils](packages/common/authUtils/README.md)       | [CHANGELOG.md](packages/common/authUtils/CHANGELOG.md)    | Utilities, operations, datatypes, and types related to Auth   |
| [@moralisweb3/common-evm-utils](packages/common/evmUtils/README.md)         | [CHANGELOG.md](packages/common/evmUtils/CHANGELOG.md)     | Utilities, operations, datatypes and types related to Evm     |
| [@moralisweb3/common-sol-utils](packages/common/solUtils/README.md)         | [CHANGELOG.md](packages/common/solUtils/CHANGELOG.md)     | Utilities, operations, datatypes and types related to Solana  |
| [@moralisweb3/common-streams-utils](packages/common/streamsUtils/README.md) | [CHANGELOG.md](packages/common/streamsUtils/CHANGELOG.md) | Utilities, operations, datatypes and types related to Streams |

## Tools

Stand-alone tools and utilities

| package                                                       | changelog                                   | description                                                     |
| ------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| [@moralisweb3/eslint-config](packages/eslintConfig/README.md) | [CHANGELOG.md](packages/eslintConfig/CHANGELOG.md) | Eslint rules, used within the Moralis SDK and its demo projects |



# 🧙‍♂️ Community

- [Discord](https://discord.gg/moralis)
- [Forum](https://forum.moralis.io)
