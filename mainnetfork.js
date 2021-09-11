const hre = require("hardhat");

async function main() {
    let signer;
    const url ='https://eth-mainnet.alchemyapi.io/v2/it-mXmBpJFpD9FcH-IUjkmpVn7Cua9Ak'
    const provider = new ethers.providers.JsonRpcProvider(url);
    //const signer = await ethers.provider.getSigner();
    vitalik = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
    //balance = await ethers.provider.getBalance(vitalik);
    
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [vitalik],
    });
     signer = await ethers.provider.getSigner(vitalik);
    const balance = await ethers.provider.getBalance(vitalik);   
    console.log(balance.toString());
    const tx = await signer.sendTransaction({
        to: "0xF2418CE56C761B0b1C03BC306B78ac929454eed3",
        value: ethers.utils.parseEther("3000")
    });
    await tx.wait();
    const mybalance = await ethers.provider.getBalance("0xF2418CE56C761B0b1C03BC306B78ac929454eed3");  
    console.log(mybalance.toString());
 }


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
