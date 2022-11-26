import "@css/globals.css";

// include styles from the ui
import "ui/styles.css";

import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://127.0.0.1:7777/graphql",
});

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
