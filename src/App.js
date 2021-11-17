import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./common/NavBar";
import Home from "./home/Home";
import About from "./about/About";
import Footer from "./common/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Projects from "./projects/Projects";
import Packages from "./packages/Packages";

library.add(fas, fab, faArrowDown);

function App() {
  const [mode, setMode] = useState("light");
  let location = useLocation();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      changeNavBar(false);
    } else {
      changeNavBar(true);
    }
  }, [location]);

  const changeNavBar = (dark) => {
    if (!dark) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      {mode === "dark" ? (
        <div className={`${mode} animate-fade-in`}>
          <NavBar />
        </div>
      ) : (
        <div className={`${mode}`}>
          <NavBar />
        </div>
      )}
      <Switch>
        <Route exact path="/">
          <Home changeNavBar={changeNavBar} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/packages">
          <Packages />
        </Route>
        <Route path="/projects/web-development">
          <div className="bg-white min-h-screen"></div>
        </Route>
        <Route path="/projects/app-development"> </Route>
        <Route path="/projects/flyers"> </Route>
        <Route path="/projects/videos"> </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
