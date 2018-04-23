/**
 * @flow
 * @relayHash 7883d2d02d17d10e85f9877da68ef47e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type subscribeNewsletterMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
    recaptcha: string,
  },
|};
export type subscribeNewsletterMutationResponse = {|
  +subscribeNewsletter: ?{|
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation subscribeNewsletterMutation(
  $input: SubscribeNewsletterInput!
) {
  subscribeNewsletter(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubscribeNewsletterInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "subscribeNewsletter",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SubscribeNewsletterInput!"
      }
    ],
    "concreteType": "SubscribeNewsletterPayload",
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
  "name": "subscribeNewsletterMutation",
  "id": null,
  "text": "mutation subscribeNewsletterMutation(\n  $input: SubscribeNewsletterInput!\n) {\n  subscribeNewsletter(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subscribeNewsletterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "subscribeNewsletterMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '4c9823bf5c166e8b655c0f228e629154';
module.exports = node;
