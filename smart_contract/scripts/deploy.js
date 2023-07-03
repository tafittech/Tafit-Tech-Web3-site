async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  console.log("Contract Deployed to Address:",transactions.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });












// async function main() {

//     const [deployer] = await ethers.getSigners();

//     console.log(
//     "Deploying contracts with the account:",
//     deployer.address
//     );

//     console.log("Account balance:", (await deployer.getBalance()).toString());

//     const Transactions = await ethers.getContractFactory("Transactions");
//     const transactions = await Transactions.deploy();

//     console.log("Contract deployed at:", transactions.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });







// const hre = require("hardhat");

// const main = async () => {

//   const Transactions  = await hre.ethers.getContractFactory("Transactions");
//   const transactions = await Transactions.deploy();

//   await transactions.deploy();

//   console.log("Transactions deployed to:", transactions.address);
// }

// const runMain = async () => {
//   try {
//     await main();
//     process.exitCode(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1)
//   }
// }
// runMain();

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

