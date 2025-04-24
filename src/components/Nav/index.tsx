import { Menu, MenuProps } from "antd";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import { routeConfig } from "@/route";
import { useNavigate } from "react-router-dom";

const items = routeConfig.map((item) => {
  return {
    key: item.path,
    label: item.label,
  };
});

const Nav = () => {
  const [current, setCurrent] = useState<string>("Home");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key as string);
    navigate(e.key as string);
  };

  return (
    <div className="fixed w-full top-0 z-50 flex justify-around">
      <div>
        <img src={Logo} alt="logo" className="w-[337px] h-[46px]" />
      </div>
      <Menu
        style={{
          background: "transparent",
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
