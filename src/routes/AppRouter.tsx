import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AppNavbar from "../shared/AppNavbar/AppNavbar";
import Home from "../views/Home/Home";
import Projects from "../views/Projects/Projects";
import { Sidebar } from 'primereact/sidebar';
import AppSidebar from "../shared/AppSidebar/AppSidebar";
import { SidebarContext } from "../context/SidebarContext";

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
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;