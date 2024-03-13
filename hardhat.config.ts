import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
const SHARDEUM_RPC = process.env.SHARDEUM_RPC;
const privateKey = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "shardeum",
  networks: {
    hardhat: {},
    
    shardeum: {
      url: SHARDEUM_RPC,
      chainId: 8082,
      accounts: [privateKey!],
    },
  },
  solidity: {
    //configure solidity version for compilation
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
