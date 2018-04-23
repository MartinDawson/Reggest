/**
 * @flow
 * @relayHash 3ab43324c83f548676088ea31634f54b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type socialLoginCallbackContainerQueryVariables = {| |};
export type socialLoginCallbackContainerQueryResponse = {|
  +externalLoginCallback: ?{|
    +loginProvider: ?string,
    +userName: ?string,
    +user: ?{|
      +userName: string,
    |},
  |},
|};
*/


/*
query socialLoginCallbackContainerQuery {
  externalLoginCallback {
    loginProvider
    userName
    user {
      userName
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "loginProvider",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "userName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "socialLoginCallbackContainerQuery",
  "id": null,
  "text": "query socialLoginCallbackContainerQuery {\n  externalLoginCallback {\n    loginProvider\n    userName\n    user {\n      userName\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "socialLoginCallbackContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "externalLoginCallback",
        "storageKey": null,
        "args": null,
        "concreteType": "ExternalLoginCallbackPayload",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "plural": false,
            "selections": [
              v1
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "socialLoginCallbackContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "externalLoginCallback",
        "storageKey": null,
        "args": null,
        "concreteType": "ExternalLoginCallbackPayload",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'fe4ee4d91512d8642c795a9d221e1549';
module.exports = node;
