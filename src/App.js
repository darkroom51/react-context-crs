import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/styles.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/" component={Rooms} />
        <Route exact path="/cars/:slug" component={SingleRoom} />
        <Route exact path="/contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
