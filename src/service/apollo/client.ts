import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import cookies from "js-cookie";

const uri = process.env.NEXT_PUBLIC_SERVER_URL + "/graphql";

const httpLink = new HttpLink({
  uri,
  credentials: "same-origin",
  headers: {
    "Accept-Language": "en",
  },
});

const authLink = setContext(() => {
  const token = cookies.get("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Accept-Language": "en",
    },
  };
});

export const client: any = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export const getStandaloneApolloClient = async () => {
  const { ApolloClient, InMemoryCache, HttpLink } = await import(
    "@apollo/client"
  );
  return new ApolloClient({
    link: new HttpLink({
      uri,
      fetch,
      headers: {
        "Accept-Language": "en",
      },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
};

export const getAuthApolloClient = async (ctx: any) => {
  const { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } =
    await import("@apollo/client");
  const httpLink = new HttpLink({
    uri,
    fetch,
  });
  const token =
    (ctx && ctx.req && ctx.req.cookies.jwtToken) ||
    cookies.get("jwtToken") ||
    "";
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "Accept-Language": "en",
        Authorization: token ? `Mskn ${token}` : "",
      },
    }));
    return forward(operation);
  });
  return new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
  });
};
