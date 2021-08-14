import * as React from "react"
import { ChakraProvider, theme, } from "@chakra-ui/react"
import { HomePage } from "./Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { GuidePage } from "./Guide";

export const App = () => {
  return <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/guide">
          <GuidePage />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
}
