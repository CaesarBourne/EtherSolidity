const { expect } = require("chai");
// const { ethers } = require("hardhat");
// const { describe, it } = require("mocha");

describe("My Contract", () => {
  let contract;

  before(async () => {
    const Contract = await ethers.getContractFactory("MyContract");
    contract = await Contract.deploy();
  });

  it("The default value of num has to be 0", async () => {
    expect(await contract.getNum()).to.equal(0);
  });

  describe("Incrementing", () => {
    it("Number should be incremented by one value ", async () => {
      let transactionIncrement = await contract.increment();
      await transactionIncrement.wait();
      expect(await contract.getNum()).to.equal(1);
    });
  });

  describe("Decrement", () => {
    it("Number should be decremented by 1 ", async () => {
      let transactionDecrement = await contract.decrement();
      await transactionDecrement.wait();
      expect(await contract.getNum()).to.equal(0);
    });
  });
});
