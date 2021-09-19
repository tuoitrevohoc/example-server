/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoItem_task$ref: FragmentReference;
declare export opaque type TodoItem_task$fragmentType: TodoItem_task$ref;
export type TodoItem_task = {|
  +id: ?string,
  +name: ?string,
  +finished: ?boolean,
  +$refType: TodoItem_task$ref,
|};
export type TodoItem_task$data = TodoItem_task;
export type TodoItem_task$key = {
  +$data?: TodoItem_task$data,
  +$fragmentRefs: TodoItem_task$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_task",
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
  "type": "Task",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd30f16fd3ac83d79609fddd397948f3b';

module.exports = node;
