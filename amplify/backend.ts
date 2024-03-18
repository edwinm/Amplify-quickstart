import { defineBackend } from '@aws-amplify/backend';
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { auth } from './auth/resource';
import { data } from './data/resource';
import {myDemoFunction} from './functions/my-demo-function/resource'
import {Stack} from "aws-cdk-lib";

const backend = defineBackend({
  auth,
  data,
  myDemoFunction,
});

const apiGatewayStack = backend.createStack("apigateway-stack");

// create a REST API resource
const myAPI = new LambdaRestApi(apiGatewayStack, "MyApi", {
  handler: backend.myDemoFunction.resources.lambda,
});

// patch the custom REST API resource to the expected output configuration
backend.addOutput({
  custom: {
    apiId: myAPI.restApiId,
    apiEndpoint: myAPI.url,
    apiName: myAPI.restApiName,
    apiRegion: Stack.of(apiGatewayStack).region,
  },
});

