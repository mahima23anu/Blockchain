import React, { useState } from "react";
import Web3 from "web3";

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
// -----------------------------------------------------------------------------------------------------




const Web3 = require('web3');

const web3 = new Web3('http://localhost:8545'); // use the HTTP provider provided by Ganache

const contractAddress = '0xCa25908D7aDecA260Ca2a543aee892457C444805'; // replace with your own contract address

const contractAbi = [ // replace with your own contract ABI
{
    "contractName": "DataStorage",
    "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "storedData",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ],
          "name": "storeData",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
    }
];

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

const data = 'example data';

// contractInstance.methods.storeData(data).send({ from: '0xCa25908D7aDecA260Ca2a543aee892457C444805' }) // replace with your own account address
//     .on('transactionHash', function(hash){
//         console.log(`Transaction hash: ${hash}`);
//     })
//     .on('receipt', function(receipt){
//         console.log(`Transaction receipt: ${receipt}`);
//     })
//     .on('error', function(error, receipt) {
//         console.log(`Transaction error: ${error}`);
//     });

//-------------------------------------------------------------------------------------------------------
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameInput;
