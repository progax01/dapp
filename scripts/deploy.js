const main = async () => {
  const [deployer] = await ethers.getSigners();

  // Deploy the contract
  const contract = await ethers.deployContract("Kyc");

  // Print the contract address to the console
  console.log("Contract address:", contract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
