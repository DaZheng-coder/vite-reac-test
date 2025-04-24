import { ReactNode } from "react";
import Header from "../Home/Header";
import Aihead from "@assets/aihead.png";
import { Typography } from "antd";

const { Link } = Typography;

const Tools = () => {
  const data = [
    {
      icon: Aihead,
      title: "通用AI达模型",
      list: [
        {
          title: "ChatGPT",
          url: "https://chat.openai.com/",
          desc: "ChatGPT是一个由OpenAI开发的对话式人工智能模型，基于GPT-3.5架构，能够理解和生成自然语言。",
        },
        {
          title: "Bing AI",
          url: "https://www.bing.com/",
          desc: "Bing AI是微软公司推出的智能搜索引擎，提供自然语言搜索和对话式搜索功能。",
        },
        {
          title: "Claude AI",
          url: "https://claude.ai/",
          desc: "Claude AI是Anthropic公司开发的对话式人工智能助手，旨在提供安全和有用的对话体验。",
        },
        {
          title: "Google Bard",
          url: "https://bard.google.com/",
          desc: "Google Bard是谷歌推出的对话式人工智能助手，能够回答问题、提供建议和进行对话。",
        },
      ],
    },
  ];

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
    <div className="bg-[#FBFCFE]">
      <Header />
      <div className="flex pb-[64px]">
        {data.map((item, index) => {
          return (
            <div>
              {renderTitle(item.icon, item.title)}
              <div className="flex gap-[24px]">
                {item.list.map((item) => (
                  <AICard
                    icon={item.url}
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
        <Link className="text-[12px]" href={url} target="_blank" />
      </div>
    </div>
  );
};
