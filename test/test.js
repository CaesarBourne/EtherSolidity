const { expect } = require("chai");
const { ethers } = require("hardhat");
const { describe, it } = require("mocha");

describe("My Contract", () => {
  let contract;

  before(async () => {
    const Contract = await ethers.getContractFactory("mycontract");
    contract = await Contract.deploy();

    it("The default value of num has to be 0", async () => {
      expect(await contract.getNum()).to.equal(0);
    });
  });
});
