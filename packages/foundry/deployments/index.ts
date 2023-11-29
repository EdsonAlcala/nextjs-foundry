import deploymentAddresses from './deploymentAddresses.json';

type DeploymentValue = `0x${string}`;

interface Deployments {
    [contractName: string]: {
        [networkId: string]: DeploymentValue;
    };
}

export const deployments: Deployments = deploymentAddresses as Deployments