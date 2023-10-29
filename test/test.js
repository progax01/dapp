const { expect } = require("chai");

describe("KYC Contract", function () {
  let KYC;
  let kyc;
  let owner;
  let user;

  beforeEach(async () => {
    KYC = await ethers.getContractFactory("KYC");
    kyc = await KYC.deploy();
    await kyc.deployed();

    [owner, user] = await ethers.getSigners();
  });

  it("Should deploy the KYC contract", async function () {
    expect(kyc.address).to.not.equal(0);
  });

  it("Should set KYC data and verify it", async function () {
    await kyc.connect(user).setKYCData("Anurag Sahu", "anurag@gmail.com", 1234567890, 123456789000, "India");
    const isVerified = await kyc.verifyKYC(user.address);
    expect(isVerified).to.equal(true);
  });

  it("Should get KYC data", async function () {
    await kyc.connect(user).setKYCData("Anurag Sahu", "anurag@gmail.com", 9876543210, 987654321000, "India");
    const [userAddress, isVerified, fullName, email, phone, aadhar, location] = await kyc.getKYCData(user.address);
    expect(userAddress).to.equal(user.address);
    expect(isVerified).to.equal(true);
    expect(fullName).to.equal("Anurag Sahu");
    expect(email).to.equal("anurag@gmail.com");
    expect(phone).to.equal(9876543210);
    expect(aadhar).to.equal(987654321000);
    expect(location).to.equal("India");
  });

  it("Should not set KYC data if already verified", async function () {
    await kyc.connect(user).setKYCData("Name", "Name@example.com", 1111111111, 1111111111, "My City");
    try {
      await kyc.connect(user).setKYCData("New Name", "newemail@example.com", 1234567890, 123456789000, "New City");
    } catch (error) {
      expect(error.message).to.contain("KYC already done");
    }
  });
});
