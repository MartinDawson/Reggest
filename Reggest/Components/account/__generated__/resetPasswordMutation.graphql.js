/**
 * @flow
 * @relayHash 17410fb9eed4bda536d6aae8c1c059db
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type resetPasswordMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    password: string,
    userId: string,
    token: string,
  },
|};
export type resetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation resetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ResetPasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ResetPasswordInput!"
      }
    ],
    "concreteType": "ResetPasswordPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "resetPasswordMutation",
  "id": null,
  "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '2d3beda2f9196cefb4e4c49c59adeb1c';
module.exports = node;
