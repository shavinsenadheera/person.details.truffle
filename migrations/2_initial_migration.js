var Migrations = artifacts.require("./Person.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
};