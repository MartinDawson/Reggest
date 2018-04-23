/**
 * @flow
 * @relayHash 941408b7a54af369ed26722736f62661
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    username: string,
    email: string,
    password: string,
  },
|};
export type registerMutationResponse = {|
  +register: ?{|
    +user: ?{|
      +userId: string,
    |},
    +emailConfirmationToken: ?string,
  |},
|};
*/


/*
mutation registerMutation(
  $input: RegisterInput!
) {
  register(input: $input) {
    user {
      userId
      id
    }
    emailConfirmationToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RegisterInput!"
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
  "name": "emailConfirmationToken",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "registerMutation",
  "id": null,
  "text": "mutation registerMutation(\n  $input: RegisterInput!\n) {\n  register(input: $input) {\n    user {\n      userId\n      id\n    }\n    emailConfirmationToken\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "registerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "register",
        "storageKey": null,
        "args": v1,
        "concreteType": "RegisterPayload",
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
    "name": "registerMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "register",
        "storageKey": null,
        "args": v1,
        "concreteType": "RegisterPayload",
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
(node/*: any*/).hash = '53b384d2e16588e7aaa2945ab81f36d7';
module.exports = node;
