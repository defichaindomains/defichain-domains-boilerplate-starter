import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloLink } from "apollo-link";

const registrySubgraph = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/defichaindomains/defichain-domains-registry",
});

const marketplaceSubgraph = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/defichaindomains/defichain-domains-marketplace",
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "registry",
    registrySubgraph,
    marketplaceSubgraph
  ),
  cache: new InMemoryCache(),
});

export default client;
