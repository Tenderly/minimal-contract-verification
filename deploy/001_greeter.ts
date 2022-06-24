// import {HardhatRuntimeEnvironment} from 'hardhat/types';
// import {DeployFunction} from 'hardhat-deploy/types';

const func: any = async function (hre: any) {
    const acc = await hre.ethers.getSigners()

    await hre.deployments.deploy('Greeter', {
        from: acc[0].address,
        args: ["Hi!"],
        log: true,
    });
};
export default func;
func.tags = ['Greeter'];
