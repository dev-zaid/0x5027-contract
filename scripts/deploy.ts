const hre = require("hardhat");

async function main() {
  const OtakuVerse = await hre.ethers.getContractFactory("OtakuVerse");
  const otakuToken = await OtakuVerse.deploy();

  const tokenAddress = await otakuToken.getAddress();
  console.log("otakuToken deployed to:", tokenAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
