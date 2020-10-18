import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import styled from "styled-components";
import ItemDetails from "./ItemDetails";

// more or less lending a global font-family style
const Wrapper = styled.div`
  font-family: sans-serif;
`;

const App = (props) => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
