const DataStorage = artifacts.require("ProjectFIR");

module.exports = function(deployer) {
  deployer.deploy(DataStorage);
};
