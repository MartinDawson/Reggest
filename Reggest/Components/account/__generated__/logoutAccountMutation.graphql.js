/**
 * @flow
 * @relayHash eda14a2366ac0186874303d3e4bd5a00
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type logoutAccountMutationVariables = {| |};
export type logoutAccountMutationResponse = {|
  +logout: ?{|
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation logoutAccountMutation {
  logout {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logout",
    "storageKey": null,
    "args": null,
    "concreteType": "LogoutPayload",
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
  "name": "logoutAccountMutation",
  "id": null,
  "text": "mutation logoutAccountMutation {\n  logout {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "logoutAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "logoutAccountMutation",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'd649bd8f5ba9f869ffbeb91181fcf39f';
module.exports = node;
