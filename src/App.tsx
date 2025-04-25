import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { routeConfig } from "./route";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
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
      <Footer />
    </div>
  );
}

export default App;
