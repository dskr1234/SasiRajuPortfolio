import { Route, Switch } from "react-router-dom";

import Home from "./components/home/home";

import About from "./components/about/about";

import Projects from "./components/projects/projects";

import Pass from "./components/GatePass/pass";

import ProtectedRoute from "./components/protectedRoute/protectedRoute";


import "./App.css";

const App = () => (
  <div className="app-background">
    <Switch>
      <Route exact path="/pass" component={Pass} />
      <ProtectedRoute  exact path="/" component={Home} />
      <ProtectedRoute  exact path="/about" component={About} />
      <ProtectedRoute  exact path="/projects" component={Projects} />
      
    </Switch>
  </div>
);

export default App;
