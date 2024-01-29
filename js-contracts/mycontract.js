const hre = require("hardhat");
const ethers = hre.ethers;

const abi = [
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const main = async () => {
  const signers = await ethers.getSigner();

  const account = await ethers.getSigner(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  );

  const MyContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const MyContractABI = require("../artifacts/contracts/MyContract.sol/MyContract.json");

  const MyContract = await ethers.getContractAtFromArtifact(
    MyContractABI,
    MyContractAddress
  );

  try {
    //FETCH INITIAL STATE OF NUMBER
    let numVal = MyContract.getNum();
    console.log("Initial COntarct Value ", String(initialNum));

    //exexcute contract first time increment
    let transactionIncrement = await MyContract.increment();
    await transactionIncrement.wait();
    console.log("Num value has been incremented by first account.");

    //fetch after first increment
    numVal = MyContract.getNum();
    console.log("Num value after incrementing COntarct  ", String(numVal));

    //decrementing num
    let trnsactionDecremenet = MyContract.connect(account).decrement();
  } catch (error) {}
};
