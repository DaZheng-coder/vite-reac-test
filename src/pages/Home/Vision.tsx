import Title from "@/components/Title";
import Qiyeyuanjing from "@assets/qiyeyuanjing.png";
import Qiyeshiming from "@assets/qiyeshiming.png";
import Hexinjingzhengli from "@assets/hexinjingzhengli.png";
import Qiyejiazhiguan from "@assets/qiyejiazhiguan.png";
import Qiyejingshen from "@assets/qiyejingshen.png";
import AboutBg from "@assets/AboutBg.png";
import SubTitle from "@/components/SubTitle";
import Wrap from "@/components/Wrap";
import { useState } from "react";
import { CorporateCulture } from "@/types";
import request from "@/api/request";

const Vision = () => {
  const data = [
    {
      icon: Qiyeyuanjing,
      title: "企业愿景",
      desc: "成为最具竞争力的“AI + 建筑建材供应链赋能企业",
    },
    {
      icon: Qiyeshiming,
      title: "企业使命",
      desc: "全世界建筑建材企业通过 AI + 供应链取得更大成就",
    },
    {
      icon: Qiyejiazhiguan,
      title: "企业价值观",
      desc: "服务创造价值，专业赢得信任",
    },
    {
      icon: Hexinjingzhengli,
      title: "核心竞争力",
      desc: "独特的建筑建材供应链论、AI + 建筑建材的赋能能力、灵活的合伙机制、业务线上化",
    },
    {
      icon: Qiyejingshen,
      title: "企业精神",
      desc: "迎难而上，创新超越",
    },
  ];

  return (
    <Wrap
      subtitle="企业文化"
      bg={AboutBg}
      style={{ padding: "0 13.5%", backgroundSize: "cover" }}
    >
      <div className="pt-[83px] pb-[92px] flex gap-[25px]">
        {data.map((item, index) => {
          return (
            <ItemCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default Vision;

const ItemCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 6px 14px 0px rgba(0,0,0,0.05)",
      }}
      className="flex-1 flex flex-col items-center"
    >
      <img className="w-[90px] h-[90px] mt-[38px]" src={icon} alt="" />
      <div className="text-[24px] font-bold mt-[20px] mb-[28px]">{title}</div>
      <div className="mx-[18px] mb-[34px] pt-[26px] border-t-[1px] border-[#D8D8D8] text-[18px] text-[#666]">
        {desc}
      </div>
    </div>
  );
};
