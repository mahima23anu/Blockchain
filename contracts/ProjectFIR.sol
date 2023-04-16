// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;


contract ProjectFIR {
  
  struct FIR {
    string name;
  string email;
  string phoneNumber;
  string streetAddress;
  string city;
  string zipCode;
  string witness;
  string incidentDate;
  string details;
  }

  constructor()  {

  }

  mapping ( address => FIR ) public FIRBook;
  FIR[] public Records;

  function launchFIR (string memory _name, string memory _email, string memory _phoneNumber, string memory _streetAddress, 
  string memory _city, string memory _zipCode, string memory _witness, string memory _incidentDate,
  string memory _details) public {
      FIR memory report = FIR(_name, _email, _phoneNumber, _streetAddress, _city, _zipCode, _witness, _incidentDate, _details);
      FIRBook[msg.sender] = report;
      Records.push(report);
  }
   
  function getFIRCount() public view returns(uint) {
      return Records.length;
  } 

  function getFIR(uint index) public view returns(string memory, string memory) {
      return (Records[index].name, Records[index].email);
  }
  
}