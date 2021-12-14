import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        color: "rgba(255, 255, 255, 0.8)",
        backgroundImage:"url('/fondo_pantalla2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        // background: "linear-gradient(270deg, rgba(8,190,154,1) 0%, rgba(7,236,194,1) 0%, rgba(8,129,187,1) 100%)"
      },
      a: {
        color: "violet",
      },
    }),
  },
  // breakpoints: createBreakpoints({
  //   sm: "450px",
  //   md: "1000px",
  //   lg: "110px",
  //   xl: "1200px"
  // })
})

export default theme;