// Import ethers from hardhat package
const { ethers } = require('hardhat');

/*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so nftContract is a factory for instances of the NFTee contract
*/
async function main() {
    const nftContract = await ethers.getContractFactory("NFTee");

    // Contract is deployed
    const deployedNFTContract = await nftContract.deploy("LW3 First NFT","LW3FN");

    // wait for the deployment to finish
    await deployedNFTContract.deployed();

    // print the address of the deployed contract
    console.log('NFT Contract Address', deployedNFTContract.address);
}

// Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});