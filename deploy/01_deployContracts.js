const { network } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  let nftAuction = await deploy("Auction", {
    from: deployer,
    log: true,
  });

};
module.exports.tags = ["all", "Auction"];
