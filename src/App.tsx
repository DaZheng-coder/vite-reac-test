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
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
