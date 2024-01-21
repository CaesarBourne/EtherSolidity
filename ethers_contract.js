const { ethers } = require("ethers");

const dotenv = require("dotenv");
dotenv.config();

const sender_pvt_key = process.env.PVT_KEY;

const contract_Address = "0x3409FFbB89260d7EA2d6C9851e123e4d2b41Be85";

let provider = ethers.getDefaultProvider(process.env.SEP_NETWORK);
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);

const contract_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "variable",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
];

const contract = new ethers.Contract(contract_Address, contract_ABI, provider);
