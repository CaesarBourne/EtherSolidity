// const { ethers } = require("ethers");

const contractAddress = "0x8E0aCb147974AF8F4efE58fD05084B7DAb97B4e4";
const secondAddress = "0x04E9F6c906A1316Ab1db7d5D9aBb81CEe6cf0ed8";

let walletContract;

const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  walletContract = new ethers.Contract(secondAddress, abi, signer);

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  document.getElementById("wallet-address").textContent =
    account.substring(0, 5) + "..." + account.substring(37, 42);
  document.getElementById("pending-allowance").textContent =
    await walletContract.myAllowance();
  document.getElementById("wallet-balance").textContent =
    await walletContract.getWalletBalance();
};
const renew = async () => {
  const account = document.getElementById("user").value;
  const amount = document.getElementById("allowance").value;
  var tx = await walletContract.renewAllowance(account, amount, 86400);
  await tx.wait();
};

const spend = async () => {
  const account = document.getElementById("receiver").value;
  const amount = document.getElementById("amount").value;
  var tx = await walletContract.spendCoins(account, amount);
  await tx.wait();
};
