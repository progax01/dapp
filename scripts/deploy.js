const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();

  // Deploy the contract
  const contract = await ethers.deployContract("KYC");

  // Print the contract address to the console
  console.log("Contract address:", contract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
