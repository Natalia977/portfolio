import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          color: "white",
          background: "linear-gradient(346deg, rgba(228,226,223,1) 0%, rgba(147,146,144,1) 100%)"
        },
        a: {
          color: "violet",
        },
      }),
    },
  });

export default theme;