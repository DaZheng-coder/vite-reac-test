import useRouteStore from "./store/useRouteStore";
import { Routes, Route } from "react-router-dom";

const RouteView = () => {
  const routeConfig = useRouteStore((state) => state.routeConfig);
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route path={route.path} element={route.element}>
          {route.children &&
            route.children.map((subRoute) => (
              <Route
                key={subRoute.path}
                index={subRoute.path === ""}
                path={subRoute.path}
                element={subRoute.element}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default RouteView;
