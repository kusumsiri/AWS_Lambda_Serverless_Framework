# AWS Lambda Function by Serverless Framework
An example that explains and demonstrates how to create a lambda function on Amazon Web Services (AWS) using the Serverless-framework

### Introduction
AWS [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) allows code to run without dealing with servers in the cloud. There are three ways to create a Lambda function on AWS.
1. AWS Console : The web interface provided by AWS
2. AWS Cloud9 : Cloud IDE provided by AWS
3. Using the local development environment

### Setting up the local development environment
The [Serverless framework](https://www.serverless.com/framework/docs/getting-started) (a CLI tool written in Node.js) allows writing and deploying Lambda functions.

Install the serverless CLI via NPM:
```
npm install -g serverless
```
Then [configure AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

### Setting up and deploying the Lambda function
Use the following command to clone this repository

```
git clone https://github.com/kusumsiri/AWS_Lambda_Serverless_Framework.git
```
```
cd AWS_Lambda_Serverless_Framework
```
Then use the following command to deploy it
```
serverless deploy
```
Your output will look like below
```
Deploying lambda-function to stage dev (us-east-1)
✔ Service deployed to stack lambda-function-dev (135s)
endpoint: https://jbzo26rdt3zcpgdv263w4nlziu0zivpr.lambda-url.us-east-1.on.aws/
functions:
  hello: dev-simple-lambda-function (1.6 kB)
```
Copy the 'endpoint' and access it using any browser.

Or send a curl request
```
curl https://jbzo26rdt3zcpgdv263w4nlziu0zivpr.lambda-url.us-east-.on.aws/
```
(Please edit the above url accordingly)

### Removing the Lambda function from AWS
If the Lambda function and all other settings need to be removed
```
serverless remove
```
