const contract = artifacts.require("BAFC_V1");

module.exports = function(deployer, network, accounts) {

  var feeAddr = "";
  deployer.deploy(contract, feeAddr);
};
