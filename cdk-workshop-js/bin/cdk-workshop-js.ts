#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopJsStack } from '../lib/cdk-workshop-js-stack';

const app = new cdk.App();
new CdkWorkshopJsStack(app, 'CdkWorkshopJsStack');
