type DeploymentValue = `0x${string}`;

interface Deployments {
    [contractName: string]: {
        [networkId: string]: DeploymentValue;
    };
}