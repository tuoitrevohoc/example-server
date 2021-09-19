/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type editTaskMutationVariables = {|
  id: string,
  name: string,
  finished: boolean,
|};
export type editTaskMutationResponse = {|
  +editTask: ?{|
    +id: ?string,
    +name: ?string,
    +finished: ?boolean,
  |}
|};
export type editTaskMutation = {|
  variables: editTaskMutationVariables,
  response: editTaskMutationResponse,
|};
*/


/*
mutation editTaskMutation(
  $id: String!
  $name: String!
  $finished: Boolean!
) {
  editTask(id: $id, name: $name, finished: $finished) {
    id
    name
    finished
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "finished"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "finished",
        "variableName": "finished"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "editTask",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "finished",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "editTaskMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "editTaskMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7628dacc484809b3c2c2e2f2b3c247e7",
    "id": null,
    "metadata": {},
    "name": "editTaskMutation",
    "operationKind": "mutation",
    "text": "mutation editTaskMutation(\n  $id: String!\n  $name: String!\n  $finished: Boolean!\n) {\n  editTask(id: $id, name: $name, finished: $finished) {\n    id\n    name\n    finished\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8a491c0b18fa133215a6ddcf4cf75eea';

module.exports = node;
