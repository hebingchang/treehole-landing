import * as React from "react"
import { ChakraProvider, theme, } from "@chakra-ui/react"
import { HomePage } from "./Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { GuidePage } from "./Guide";
import { ClassTablePage } from "./Classtable";
import { ThreadPage } from "./Thread";

export const App = () => {
  return <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/thread/:id/:floor?">
          <ThreadPage />
        </Route>
        <Route path="/guide">
          <GuidePage />
        </Route>
        <Route path="/classtable">
          <ClassTablePage />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
}
