const { ethers } = require("ethers");

const dotenv = require("dotenv");
dotenv.config();

const sender_pvt_key = process.env.PVT_KEY;

const contract_Address = "0x3409FFbB89260d7EA2d6C9851e123e4d2b41Be85";

let provider = ethers.getDefaultProvider(process.env.SEP_NETWORK);
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);

const contract = new ethers.Contract(contract_Address, contract_ABI, provider);
console.log("contract ad ", contract_Address);
console.log("contract abi ", contract_ABI);
console.log("contract pro ", provider);

const returnVariable = async () => {
  const variableVal = await contract.variable();
  console.log("Variable value for this contract ", variableVal);

  const contractConnectWallet = contract.connect(sender_wallet);

  const tx = await contractConnectWallet.decrement();
  tx.wait();
  console.log("Transaction Hash ", tx.hash);

  const variableNewValue = await contract.variable();
  console.log("Variable value after decrementing ", variableNewValue);
};

returnVariable();
