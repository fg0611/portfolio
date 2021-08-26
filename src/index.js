import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import Experience from "./components/Experience";
import "./index.css";
const App = (props) => {
  return (
    <Router>
      <div className="container">
        <Header className="header" />
        <Route className="main" exact path="/" component={Home} />
        <Route className="main" path="/home" component={Home} />
        <Route className="main" path="/projects" component={Projects} />
        <Route className="main" path="/skills" component={Skills} />
        <Route className="main" path="/studies" component={Studies} />
        <Route className="main" path="/experience" component={Experience} />
        <Footer className="footer" />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
