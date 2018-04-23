/**
 * @flow
 * @relayHash 1e8f242d8b941635ac7bea283a3e0191
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type generateResetPasswordTokenMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
  },
|};
export type generateResetPasswordTokenMutationResponse = {|
  +generateResetPasswordToken: ?{|
    +user: ?{|
      +userId: string,
    |},
    +passwordResetToken: ?string,
  |},
|};
*/


/*
mutation generateResetPasswordTokenMutation(
  $input: GenerateResetPasswordTokenInput!
) {
  generateResetPasswordToken(input: $input) {
    user {
      userId
      id
    }
    passwordResetToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "GenerateResetPasswordTokenInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "GenerateResetPasswordTokenInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "userId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "passwordResetToken",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "generateResetPasswordTokenMutation",
  "id": null,
  "text": "mutation generateResetPasswordTokenMutation(\n  $input: GenerateResetPasswordTokenInput!\n) {\n  generateResetPasswordToken(input: $input) {\n    user {\n      userId\n      id\n    }\n    passwordResetToken\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "generateResetPasswordTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "generateResetPasswordToken",
        "storageKey": null,
        "args": v1,
        "concreteType": "GenerateResetPasswordTokenPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "plural": false,
            "selections": [
              v2
            ]
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "generateResetPasswordTokenMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "generateResetPasswordToken",
        "storageKey": null,
        "args": v1,
        "concreteType": "GenerateResetPasswordTokenPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'be1f5054d9a9d216d4cc7958bf365a2b';
module.exports = node;
