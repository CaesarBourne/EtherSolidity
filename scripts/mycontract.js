const hre = require("hardhat");
const ethers = hre.ethers;
const MyContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const MyContractABI = require("../artifacts/contracts/MyContract.sol/MyContract.json");

let main = async () => {
  try {
    const account = await ethers.getSigner(
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    );

    const MyContract = await ethers.getContractAtFromArtifact(
      MyContractABI,
      MyContractAddress
    );

    //FETCH INITIAL STATE OF NUMBER
    let numVal = await MyContract.getNum();
    console.log("Initial COntarct Value ", String(numVal));

    //exexcute contract first time increment
    let transactionIncrement = await MyContract.increment();
    await transactionIncrement.wait();
    console.log("Num value has been incremented by first account.");

    //fetch after first increment
    numVal = await MyContract.getNum();
    console.log("Num value after incrementing COntarct  ", String(numVal));

    //decrementing num
    let transactionDecremenet = await MyContract.connect(account).decrement();
    transactionDecremenet.wait();
    console.log("Num value has been decremented by first account.");

    //fetcj after decrementing
    numVal = await MyContract.getNum();
    console.log("Num value after decrementing COntarct  ", String(numVal));
  } catch (error) {
    console.error("error val ", error);
  }
};

main();
