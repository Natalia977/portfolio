import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          color: "white",
          background: "linear-gradient(270deg, rgba(8,190,154,1) 0%, rgba(7,236,194,1) 0%, rgba(8,129,187,1) 100%)"
        },
        a: {
          color: "violet",
        },
      }),
    },
  });

export default theme;