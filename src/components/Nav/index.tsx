import { Menu, MenuProps } from "antd";
import { useEffect, useMemo, useState } from "react";
import Logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
import useRouteStore from "@/store/useRouteStore";

const Nav = () => {
  const [current, setCurrent] = useState<string>();
  const navigate = useNavigate();

  const routeConfig = useRouteStore((state) => state.routeConfig);

  const items = useMemo(() => {
    return (routeConfig || []).map((item) => {
      return {
        key: item.path,
        label: item.label,
      };
    });
  }, [routeConfig]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key as string);
    navigate(e.key as string);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const matchedItem = items.find((item) => path.includes(item.key));
    if (matchedItem) {
      setCurrent(matchedItem.key);
      navigate(path);
    } else {
      setCurrent(items[0]?.key);
      navigate(items[0]?.key);
    }
  }, [items, navigate]);

  return (
    <div className="fixed w-full top-0 z-50 flex justify-between px-[13.5%] bg-white">
      <div>
        <img src={Logo} alt="logo" className="w-[337px] h-[46px]" />
      </div>
      <Menu
        style={{
          border: "none",
          flex: 1,
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Nav;
