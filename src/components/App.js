import React from "react";

import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { AuthProvider } from "./../context/AuthContext";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={ Dashboard }/>
            <Route path="/signup" component={ Signup }/>
            <Route path="/login" component={ Login }/>
          </Switch>
        </AuthProvider>  
        </Router>
      </div>
    </Container>
  );
}

export default App;
