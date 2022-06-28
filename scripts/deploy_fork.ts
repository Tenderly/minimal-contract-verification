// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import * as hre from "hardhat";

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const resp = await hre.run('compile');

    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.deployed();

    const Greeter2 = await hre.ethers.getContractFactory("Greeter2");
    const greeter2 = await Greeter2.deploy("Hello, Hardhat!");
    await greeter2.deployed();

    const Greeter3 = await hre.ethers.getContractFactory("Greeter3");
    const greeter3 = await Greeter3.deploy("Hello, Hardhat!");
    await greeter3.deployed();

    await greeter.setGreeting("heyho");
    await greeter2.setGreeting("heyho2");

    await greeter3.setGreeting("heyho3");
    await greeter3.inc();

    console.log("Greeter deployed to:", greeter.address);
    console.log("Greeter2 deployed to:", greeter2.address);
    console.log("Greeter3 deployed to:", greeter3.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
