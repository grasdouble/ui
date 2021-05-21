import React from "react";

import "@fontsource/roboto";

import { Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "routes";

import UnderConstruction from "components/UnderConstruction";

import usePageTracking from "utils/usePageTracking";

function App() {
  usePageTracking();
  const GetContent = () => {
    if (true) {
      return (
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      );
    } else {
      return <UnderConstruction />;
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <GetContent />
      </main>
    </div>
  );
}

export default App;
