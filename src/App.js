import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Session from './components/session'
import Home from './components/home'
import { Button} from "@chakra-ui/react"

function App() {
  return (
    <Router>
      <Button ml={4} mt={4}><Link to="/">Home</Link></Button>
      <Button ml={4} mt={4}><Link to="/session">Session</Link></Button>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/session" component={ Session }></Route>
      </Switch>
    </Router>
  );
}

export default App;
