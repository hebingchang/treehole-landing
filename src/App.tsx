import * as React from "react"
import { ChakraProvider, theme, } from "@chakra-ui/react"
import { HomePage } from "./Home";

export const App = () => {
  return <ChakraProvider theme={theme}>
    <HomePage />
  </ChakraProvider>
}
