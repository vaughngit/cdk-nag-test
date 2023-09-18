# Welcome to your CDK TypeScript project

- [Manage application security and compliance with the AWS Cloud Development Kit and cdk-nag](https://aws.amazon.com/blogs/devops/manage-application-security-and-compliance-with-the-aws-cloud-development-kit-and-cdk-nag/)


### Overview of cdk-nag

`cdk-nag` inspired by [cfn_nag](https://github.com/stelligent/cfn_nag) which validates that the state of constructs within a given scope comply with a given set of rules. Additionally, cdk-nag provides a rule suppression and compliance reporting system. cdk-nag validates constructs by extending [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/aspects.html) Aspects. If you’re interested in learning more about the AWS CDK Aspect system, then you should check out this [post](https://aws.amazon.com/blogs/devops/align-with-best-practices-while-creating-infrastructure-using-cdk-aspects/).

`cdk-nag` includes several rule sets (NagPacks) to validate your application against. As of this post, cdk-nag includes the [AWS Solutions](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#awssolutions), [HIPAA Security](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#hipaa-security), [NIST 800-53 rev 4](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#nist-800-53-rev-4), [NIST 800-53 rev 5](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#nist-800-53-rev-5), and [PCI DSS 3.2.1](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md#pci-dss-321) NagPacks. You can pick and choose different NagPacks and apply as many as you wish to a given scope.

cdk-nag rules can either be warnings or errors. Both warnings and errors will be displayed in the console and compliance reports. Only unsuppressed errors will prevent applications from deploying with the cdk deploy command.

You can see which rules are implemented in each of the NagPacks in the [Rules](https://github.com/cdklabs/cdk-nag/blob/main/RULES.md) Documentation in the GitHub repository.

#### Apply a NagPack in your application: 

- Run the following command to install cdk-nag: 
        ` npm install cdk-nag `
- Run the following command to view the output and generate the compliance report:
    ` cdk synth `    
- Applying the AwsSolutions NagPack to the application renders errors in the console and the cdk.out/AwsSolutions-CdkTestStack-NagReport.csv



## Useful commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
