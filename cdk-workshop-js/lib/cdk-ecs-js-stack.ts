import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as ecs from '@aws-cdk/aws-ecs-patterns'
import * as patterns from '@aws-cdk/aws-ecs-patterns'
export class CdkEcsJsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new patterns.ApplicationLoadBalancedFargateService(this,"MyWebServer",{
      
    })
  }
}
