import { Route } from "react-router-dom";

import AboutMe from "pages/AboutMe";
import Background from "pages/Background";
import Logbook from "pages/Logbook";
import Projects from "pages/Projects/Projects";
import UnderConstruction from "components/UnderConstruction";

import routesConfig from "routes.json";

export type ProjectInfo = {
  startDate: string;
  githubUrl: string;
  readmePath: string;
};

export type RouteConfig = {
  key: string;
  text: string;
  path: string;
  exact?: boolean;
  nested?: RouteConfig[];
  component?: string;
  projectInfo?: ProjectInfo;
};

type RoutePath = {
  path: string;
  component: React.FunctionComponent;
  exact: boolean;
};

const getRouteConfig = (result: RoutePath[], route: RouteConfig) => {
  if (route.nested) {
    result.push(...route.nested.reduce(getRouteConfig, []));
  } else {
    let component = null;
    switch (route.component) {
      case "AboutMe":
        component = AboutMe;
        break;
      case "Background":
        component = Background;
        break;
      case "Logbook":
        component = Logbook;
        break;
      case "Projects":
        component = () => <Projects projectInfo={route.projectInfo} />;
        break;
      default:
        component = UnderConstruction;
    }

    result.push({
      path: route.path,
      component: component,
      exact: route.exact || false,
    });
  }
  return result;
};

export const routes = routesConfig.reduce(getRouteConfig, []);

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
