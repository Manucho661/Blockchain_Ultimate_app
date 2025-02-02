import React, { useState } from "react";
import { getData, sendTransaction } from "./utils/blockchain";  // Import functions

export default function App() {
  const [data, setData] = useState(null);
  const [newValue, setNewValue] = useState("");

  // Function to fetch data from the contract
  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  // Function to send data to the contract
  const handleTransaction = async () => {
    await sendTransaction(newValue);
    setNewValue("");  // Clear input after transaction
  };

  return (
    <div>
      <h1>Blockchain Interaction</h1>

      <div>
        <h2>Read Data</h2>
        <button onClick={fetchData}>Fetch Data</button>
        {data && <p>Data: {data}</p>}
      </div>

      <div>
        <h2>Write Data</h2>
        <input 
          type="text" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)} 
          placeholder="Enter value"
        />
        <button onClick={handleTransaction}>Send Transaction</button>
      </div>
    </div>
  );
}
