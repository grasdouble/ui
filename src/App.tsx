import React from "react";

import "@fontsource/roboto";

import { Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "routes";

import UnderConstruction from "components/UnderConstruction";

function App() {
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
      <GetContent />
    </div>
  );
}

export default App;
