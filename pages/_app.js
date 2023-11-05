import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/antd.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
