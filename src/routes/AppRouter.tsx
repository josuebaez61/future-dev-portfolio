import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppNavbar from "../shared/AppNavbar/AppNavbar";
import Home from "../views/Home/Home";
import Projects from "../views/Projects/Projects";
import AppSidebar from "../shared/AppSidebar/AppSidebar";
import { SidebarContext } from "../context/SidebarContext";
import Jobs from "../views/Jobs/Jobs";
import Contact from "../views/Contact/Contact";

const AppRouter = () => {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  return (
    <Router>
      <div>
        <SidebarContext.Provider value={{
          sidebarIsVisible,
          setSidebarIsVisible
        }}>
          <AppSidebar />
          <AppNavbar />
        </SidebarContext.Provider>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;