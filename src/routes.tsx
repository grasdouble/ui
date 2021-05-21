import { Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Background from "./pages/Background";
import Skills from "./pages/Skills";
import Logbook from "./pages/Logbook";
import ContactMe from "./pages/ContactMe";

export const routes = [
  {
    path: "/",
    component: AboutMe,
    exact: true,
  },
  {
    path: "/background",
    component: Background,
  },
  {
    path: "/skills",
    component: Skills,
  },
  {
    path: "/logbook",
    component: Logbook,
  },
  {
    path: "/contact",
    component: ContactMe,
  },
];

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};