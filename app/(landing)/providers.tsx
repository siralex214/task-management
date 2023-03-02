import { ApolloProvider } from "@apollo/client";
import { client } from "@service/apollo/client";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
