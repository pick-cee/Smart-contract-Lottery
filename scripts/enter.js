const { ethers, getNamedAccounts } = require("hardhat");

async function enterRaffle() {
    deployer = (await getNamedAccounts()).deployer;
    const raffle = await ethers.getContract("Raffle", deployer);
    const raffleEntranceFee = await raffle.getEntranceFee();
    await raffle.enterRaffle({ value: raffleEntranceFee + 1 });
    console.log("Entered!");
}

enterRaffle()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
