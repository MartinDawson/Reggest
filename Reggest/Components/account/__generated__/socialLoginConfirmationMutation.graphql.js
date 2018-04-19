/**
 * @flow
 * @relayHash 9565657299035151a08634a2e88980fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type socialLoginConfirmationMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    userName: string,
  },
|};
export type socialLoginConfirmationMutationResponse = {|
  +externalLoginConfirmation: ?{|
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation socialLoginConfirmationMutation(
  $input: ExternalLoginConfirmationInput!
) {
  externalLoginConfirmation(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ExternalLoginConfirmationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "externalLoginConfirmation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ExternalLoginConfirmationInput!"
      }
    ],
    "concreteType": "ExternalLoginConfirmationPayload",
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
  "name": "socialLoginConfirmationMutation",
  "id": null,
  "text": "mutation socialLoginConfirmationMutation(\n  $input: ExternalLoginConfirmationInput!\n) {\n  externalLoginConfirmation(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "socialLoginConfirmationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "socialLoginConfirmationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '0f8f99654adad87cba91488b9a47b6b0';
module.exports = node;
