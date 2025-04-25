import Title from "@/components/Title";
import Wrap from "@/components/Wrap";
import { ReactNode } from "react";

// 生成SolutionCard的mock数据列表
const data = [
  {
    title: "AI咨询",
    desc: "提供专业的AI咨询服务，帮助企业了解AI技术的应用场景和价值。",
    icon: "https://example.com/icon1.png",
  },
  {
    title: "解决方案",
    desc: "根据客户需求，提供定制化的AI解决方案，助力企业数字化转型。",
    icon: "https://example.com/icon2.png",
  },
  {
    title: "培训服务",
    desc: "提供专业的AI培训服务，帮助企业提升员工的AI技能和知识水平。",
    icon: "https://example.com/icon3.png",
  },
];

const Solution = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Title
          title="AI 咨询与解决方案介绍"
          subtitle={"Introduction to AI Consulting and Solutions".toUpperCase()}
        />
      </div>
      <Wrap
        style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
        subtitle="特点与优势"
      >
        <div className="flex mt-[66px] mb-[70px] gap-[80px] flex-wrap">
          {data.map((item) => {
            return (
              <SolutionCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            );
          })}
        </div>
      </Wrap>
    </div>
  );
};

export default Solution;

const SolutionCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) => {
  return (
    <div className="w-[290px] flex flex-col items-center justify-center gap-[22px]">
      <img className="w-[74px] h-[74px]" src={icon as string} alt="" />
      <span className="font-medium text-[24px] text-[#333333] leading-[35px] text-center normal-case">
        {title}
      </span>
      <span className="font-normal text-[18px] text-[#666666] leading-[26px] text-justify normal-case">
        {desc}
      </span>
    </div>
  );
};
