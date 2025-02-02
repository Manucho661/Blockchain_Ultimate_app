import { ethers } from "ethers";
import contractABI from "../abi/YourContract.json";  // import ABI

const contractAddress = "0xYourSmartContractAddress";  // replace with your contract address

// Create a provider from MetaMask
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Get the signer (the connected wallet)
const signer = provider.getSigner();

// Create a contract instance with ABI and signer
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Function to read data from the contract (using a "view" function)
export const getData = async () => {
  try {
    const data = await contract.someReadFunction();  // replace with your contract function
    console.log("Data from contract:", data);
    return data;
  } catch (error) {
    console.error("Error reading data:", error);
  }
};

// Function to send a transaction to the contract (write function)
export const sendTransaction = async (newValue) => {
  try {
    const tx = await contract.someWriteFunction(newValue);  // replace with your function
    await tx.wait();  // wait for the transaction to be confirmed
    console.log("Transaction Confirmed!");
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
};
