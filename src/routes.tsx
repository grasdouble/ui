import { Route } from "react-router-dom";

import AboutMe from "pages/AboutMe";
import Background from "pages/Background";
import Logbook from "pages/Logbook";
import Projects from "pages/Projects/Projects";

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
    path: "/logbook",
    component: Logbook,
  },
  {
    path: "/projects/grabot",
    component: () => <Projects readmeUrl="Sanoofr/Grabot/main/README.md" />,
  },
  {
    path: "/projects/leetcode",
    component: () => (
      <Projects readmeUrl="grasdouble/leetcode/main/README.md" />
    ),
  },
  {
    path: "/projects-archived/dashboard",
    component: () => (
      <Projects readmeUrl="grasdouble/Dashboard/master/README.md" />
    ),
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
