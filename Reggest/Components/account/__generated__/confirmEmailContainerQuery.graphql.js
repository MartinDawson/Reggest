/**
 * @flow
 * @relayHash 1baedeb0c9f6a2f93c5a77382cd2930b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type confirmEmailContainerQueryVariables = {|
  userId: string,
  token: string,
|};
export type confirmEmailContainerQueryResponse = {|
  +confirmEmail: ?boolean,
|};
*/


/*
query confirmEmailContainerQuery(
  $userId: String!
  $token: String!
) {
  confirmEmail(userId: $userId, token: $token)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "token",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "confirmEmail",
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "confirmEmailContainerQuery",
  "id": null,
  "text": "query confirmEmailContainerQuery(\n  $userId: String!\n  $token: String!\n) {\n  confirmEmail(userId: $userId, token: $token)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "confirmEmailContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "confirmEmailContainerQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '59e890fe35a1a383a61957bc73b11822';
module.exports = node;
