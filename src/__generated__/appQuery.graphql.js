/**
 * @flow
 * @relayHash dd72344c7f176f542c91ddf8c49f58d8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {| |};
*/


/*
query appQuery(
  $name: String!
) {
  ...userList_User
}

fragment userList_User on Query {
  user(login: $name) {
    id
    name
    avatarUrl
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "userList_User",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "login",
            "variableName": "name",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "avatarUrl",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appQuery(\n  $name: String!\n) {\n  ...userList_User\n}\n\nfragment userList_User on Query {\n  user(login: $name) {\n    id\n    name\n    avatarUrl\n  }\n}\n"
};

module.exports = batch;
