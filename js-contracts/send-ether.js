const { ethers } = require("ethers");

const sender_pvt_key = process.env.PVT_KEY;
const receiver_address = process.env.ADDRESS_ONE;

const amount = "0.005";
let provider = ethers.getDefaultProvider(process.env.GOE_NETWORK);
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);

const transaction = {
  to: receiver_address,
  amount: ethers.parseEther(amount),
};

sender_wallet.sendTransaction(transaction).then((result) => {
  console.log("result hash", result.hash);
});
