/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoItem_task$ref = any;
export type TodoListQueryVariables = {||};
export type TodoListQueryResponse = {|
  +allTasks: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: TodoItem_task$ref,
  |}>
|};
export type TodoListQuery = {|
  variables: TodoListQueryVariables,
  response: TodoListQueryResponse,
|};
*/


/*
query TodoListQuery {
  allTasks {
    id
    ...TodoItem_task
  }
}

fragment TodoItem_task on Task {
  id
  name
  finished
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "allTasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItem_task"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "allTasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "f26b4e6995317304a0acd2678055daeb",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  allTasks {\n    id\n    ...TodoItem_task\n  }\n}\n\nfragment TodoItem_task on Task {\n  id\n  name\n  finished\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a02ac3ac9003d80af3dfd06dccd6b5c';

module.exports = node;
