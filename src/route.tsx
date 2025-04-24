import Create from "./pages/Create";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Tools from "./pages/Tools";
import Trade from "./pages/Trade";

export const routeConfig = [
  {
    path: "/",
    label: "首页",
    element: <Home />,
  },
  {
    path: "/support",
    label: "AI+建筑建材供应链",
    element: <Support />,
  },
  {
    path: "/trade",
    label: "建材贸易",
    element: <Trade />,
  },
  {
    path: "/tools",
    label: "常用AI工具",
    element: <Tools />,
  },
  {
    path: "/create",
    label: "AI+SAAS产品共创",
    element: <Create />,
  },
];
