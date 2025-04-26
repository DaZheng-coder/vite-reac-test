import Create from "@/pages/Create";
import Home from "@/pages/Home";
import Support from "@/pages/Support";
import Tools from "@/pages/Tools";
import Trade, { TradeDetail, TradeList } from "@/pages/Trade";
import { IRouteConfigItem, NavigationMenu } from "@/types";
import request from "@/api/request";
import { create } from "zustand";

interface IRouteStore {
  routeConfig: IRouteConfigItem[];
  getRouteConfig: () => void;
}

const useRouteStore = create<IRouteStore>((set) => ({
  routeConfig: [] as IRouteConfigItem[],
  getRouteConfig: async () => {
    const res = await request.get("api/navigation/all");
    const data = res.data?.data;

    const routeConfig = data.map((item: NavigationMenu) => {
      const res: IRouteConfigItem = {
        id: item.id as number,
        path: item.linkUrl as string,
        label: item.title as string,
        element: null,
        children: [],
        sourceData: item,
      };

      switch (item.linkUrl) {
        case "/official/index":
          res.element = <Home />;
          break;
        case "/official/chain":
          res.element = <Support />;
          break;
        case "/official/trade":
          res.element = <Trade />;
          res.children = [
            {
              id: item.id as number,
              path: "",
              label: "建材贸易",
              element: <TradeList />,
              sourceData: item,
            },
            {
              id: (item.id || 0) + 999,
              path: "detail",
              label: "详情",
              element: <TradeDetail />,
            },
          ];
          break;
        case "/official/toolkit":
          res.element = <Tools />;
          break;
        case "/official/sass":
          res.element = <Create />;
          break;
        default:
          return null;
      }

      return res;
    });

    set({ routeConfig });
  },
}));

useRouteStore.getState().getRouteConfig();

export default useRouteStore;
