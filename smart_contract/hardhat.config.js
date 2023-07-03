require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

// const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/SCoBb65reha91noS0AzNYNDwrmGGsZPI",
      accounts: [`10fd5897a9238b7639ce8c3eb728e5a0876a8c0f32b19f2500a15375d90dd637`]
    }
  },
}