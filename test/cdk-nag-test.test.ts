import { Template, Annotations, Match } from 'aws-cdk-lib/assertions';
import { App, Aspects, Stack } from 'aws-cdk-lib';
import {CdkNagTestStack}  from '../lib/cdk-nag-test-stack';
import { AwsSolutionsChecks } from 'cdk-nag';

// // example test. To run these tests, uncomment this file along with the
// // example resource in lib/cdk-nag-test-stack.ts
// test('SQS Queue Created', () => {
// //   const app = new cdk.App();
// //     // WHEN
// //   const stack = new CdkNagTest.CdkNagTestStack(app, 'MyTestStack');
// //     // THEN
// //   const template = Template.fromStack(stack);

// //   template.hasResourceProperties('AWS::SQS::Queue', {
// //     VisibilityTimeout: 300
// //   });
// });

describe('cdk-nag AwsSolutions Pack', () => {
    let stack: Stack;
    let app: App;
    // In this case we can use beforeAll() over beforeEach() since our tests 
    // do not modify the state of the application 
    beforeAll(() => {
      // GIVEN
      app = new App();
      stack = new CdkNagTestStack(app, 'test');
  
      // WHEN
      Aspects.of(stack).add(new AwsSolutionsChecks());
    });
  
    // THEN
    test('No unsuppressed Warnings', () => {
      const warnings = Annotations.fromStack(stack).findWarning(
        '*',
        Match.stringLikeRegexp('AwsSolutions-.*')
      );
      expect(warnings).toHaveLength(0);
    });
  
    test('No unsuppressed Errors', () => {
      const errors = Annotations.fromStack(stack).findError(
        '*',
        Match.stringLikeRegexp('AwsSolutions-.*')
      );
      expect(errors).toHaveLength(0);
    });
  });
