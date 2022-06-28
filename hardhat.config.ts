import * as dotenv from "dotenv";

import * as tdly from "@tenderly/hardhat-tenderly";

import {HardhatUserConfig, task} from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'hardhat-deploy';

tdly.setup();
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    defaultNetwork: 'tenderly',
    solidity: {
        compilers: [{
            version: "0.8.4",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }],
        overrides: {
            "contracts/Greeter2.sol": {
                version: "0.8.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 500
                    }
                }
            }
        }
    },
    networks: {
        tenderly: {
            url: process.env.TENDERLY_FORK_URL || "",
            chainId: 1,
        },
        goerli: {
            url: process.env.GOERLI_URL || "",
            chainId: 5,
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        }
    },
    tenderly: {
        project: process.env.TENDERLY_PROJECT_SLUG || "",
        username: process.env.TENDERLY_USERNAME || "",
        // forkNetwork: "1",
        // privateVerification: true,
        // deploymentsDir: "tdly_dep"
    },
};

export default config;
