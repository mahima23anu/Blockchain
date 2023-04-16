import React, { useState } from "react";
import Web3 from "web3";
//import DataStorageABI from './abis/DataStorage.json';
import ProjectFIR from './abis/ProjectFIR.json';
import detectEthereumProvider from '@metamask/detect-provider';

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
// -----------------------------------------------------------------------------------------------------






// With Metamask
async function BlockchainBackend() {
  const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
  console.log('account: ', accounts[0]);
  const provider = await detectEthereumProvider();

if ( provider ) {
console.log('Connected');
window.web3 = new Web3(provider);
} else {
console.log('Not Connected'); 
}
const AccountAddress = await window.web3.eth.getAccounts();
console.log(AccountAddress);
var id = 0;
await window.web3.eth.net.getId()
.then(
 data => {
      id = data;  
 });
 console.log(id)
const networkData = ProjectFIR.networks[id];
console.log(networkData);
if ( networkData ) {
  const abi = ProjectFIR.abi;
  const contractAddress = networkData.address;
   const newcontract = new window.web3.eth.Contract(abi, contractAddress);  
   console.log(newcontract); 
   console.log(AccountAddress[0])
   var check;
  //  newcontract.methods.launchFIR("Abhishek", "abhishek@gmail.com", "6393038464", "Not Relevant", "Kanpur", "208007", "None", "None", "None").send({ from: AccountAddress[0] }) // replace with your own account address
  // .on('transactionHash', function(hash){
  //     console.log(`Transaction hash: ${hash}`);
  // })
  // .on('receipt', function(receipt){
  //     console.log(`Transaction receipt: ${receipt}`);
  // })
  // .on('error', function(error, receipt) {
  //     console.log(`Transaction error: ${error}`);
  // });
  let len;
  newcontract.methods.getFIRCount().call().then((data) => {
    if ( data === 0 ) {
      return 
    }
    console.log(data);
    len = data;
    for ( let i = 0 ; i < len ; i++ ) {
      newcontract.methods.getFIR(i).call().then((data) => {
        console.log(data);
      });
     }
  });
  

  }
}






//-------------------------------------------------------------------------------------------------------
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input onChange={() => {

      }} />
      <p>Hello, {name}!</p>
      <button onClick={() => {
        BlockchainBackend();
      }} >Do it!</button>
    </div>
  );
}

export default NameInput;
