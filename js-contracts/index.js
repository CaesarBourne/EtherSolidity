const { ethers } = require("ethers");

const contractAddress = "0x8E0aCb147974AF8F4efE58fD05084B7DAb97B4e4";

const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletContract = new ethers.Contract(contractAddress, abi, signer);
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
