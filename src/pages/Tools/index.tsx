import { ReactNode, useEffect, useState } from "react";
import Header from "../Home/Header";
import Aihead from "@assets/aihead.png";
import { Typography } from "antd";
import request from "@/api/request";
import { AiTool, AiToolCategory } from "@/types";

const { Link } = Typography;

interface IToolItem {
  icon: string;
  title: string;
  list: { icon: string; title: string; url: string; desc: string }[];
}

const Tools = () => {
  const [data, setData] = useState<IToolItem[]>([]);

  const getList = async () => {
    const cateRes = await request.get("api/ai/tool/category/list");
    const castData = cateRes.data?.data as AiToolCategory[];
    const toolsRes = await request.get("api/ai/tool/list");
    const toolsData = toolsRes.data?.data as AiTool[];
    if (castData && toolsData) {
      const newData = castData.map((item) => {
        return {
          icon: item.logoUrl || "",
          title: item.name || "",
          list: toolsData
            .filter((tool) => tool.categoryId === item.id)
            .map((tool) => {
              return {
                icon: tool.logoUrl || "",
                title: tool.name || "",
                url: tool.redirectUrl || "",
                desc: tool.description || "",
              };
            }),
        } as IToolItem;
      });
      console.log("*** newData", newData);
      setData(newData);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const renderTitle = (icon: ReactNode, title: string) => {
    return (
      <div className="flex items-center gap-[6px] mt-[50px] mb-[30px]">
        <img className="w-[20px] h-[20px]" src={icon as string} alt="" />
        <span className="font-normal text-[20px] text-[#333333] leading-[29px] text-left normal-case">
          {title}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#FBFCFE] px-[13.5%]">
      <div className="flex pb-[64px] flex-wrap">
        {data.map((item, index) => {
          return (
            <div key={index}>
              {renderTitle(item.icon, item.title)}
              <div className="flex gap-[24px] flex-wrap">
                {item.list.map((item) => (
                  <AICard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;

const AICard = ({
  icon,
  title,
  desc,
  url,
}: {
  icon: string;
  title: string;
  desc: string;
  url: string;
}) => {
  return (
    <div
      className="flex gap-[18px] px-[18px] py-[20px] w-[332px] overflow-hidden"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 6px 14px 0px rgba(0,0,0,0.05)",
        borderRadius: "6px 6px 6px 6px",
      }}
    >
      <img className="w-[50px] h-[50px]" src={icon} alt="" />
      <div className="w-[234px] flex flex-col gap-[6px]">
        <span className="truncate text-[20px] font-bold text-[#333]">
          {title}
        </span>
        <span className="truncate text-[12px] text-[#666]">{desc}</span>
        <Link className="text-[12px] text-[#0959F2]" href={url} target="_blank">
          {url}
        </Link>
      </div>
    </div>
  );
};
