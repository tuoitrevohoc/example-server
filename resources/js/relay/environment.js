import { Environment, Network, Store, RecordSource } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource(), {}),
});
