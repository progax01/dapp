const { expect } = require("chai");
const { ethers } = require("hardhat"); // Import ethers for contract interactions
describe("KYC Contract", function () {
  let kycContract;
  let owner;
  let user;

  before(async () => {
    [owner, user] = await ethers.getSigners();

    const KYC = await ethers.getContractFactory("KYC");
    kycContract = await KYC.deploy();
    await kycContract.deployed();
  });

  it("Should set KYC data", async () => {
    const fullName = "John Doe";
    const email = "johndoe@example.com";
    const phone = 1234567890;
    const aadhar = 123456789012;
    const location = "Test City";

    await kycContract.setKYCData(
      user.address,
      fullName,
      email,
      phone,
      aadhar,
      location
    );

    const kycData = await kycContract.getKYCData(user.address);

    expect(kycData._isVerified).to.equal(true);
    expect(kycData._FullName).to.equal(fullName);
    expect(kycData._Email).to.equal(email);
    expect(kycData._Phone).to.equal(phone);
    expect(kycData._Aadhar).to.equal(aadhar);
    expect(kycData._Location).to.equal(location);
  });

  it("Should verify KYC status", async () => {
    const isVerified = await kycContract.verifyKYC(user.address);
    expect(isVerified).to.equal(true);
  });

  it("Should not update KYC data for an already KYC-verified user", async () => {
    const fullName = "Jane Smith";
    const email = "janesmith@example.com";
    const phone = 9876543210;
    const aadhar = 987654321098;
    const location = "New City";

    await expect(
      kycContract.setKYCData(
        user.address,
        fullName,
        email,
        phone,
        aadhar,
        location
      )
    ).to.be.revertedWith("KYC already Done use");
  });
});
