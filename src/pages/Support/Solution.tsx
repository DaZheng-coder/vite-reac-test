import Title from "@/components/Title";
import Wrap from "@/components/Wrap";
import { ReactNode } from "react";
import Peixun1 from "@assets/peixun1.png";
import Peixun2 from "@assets/peixun2.png";
import Peixun3 from "@assets/peixun3.png";
import Peixun4 from "@assets/peixun4.png";
import Peixun5 from "@assets/peixun5.png";
import Peixun6 from "@assets/peixun6.png";
import Peixun7 from "@assets/peixun7.png";
import Peixun8 from "@assets/peixun8.png";

// 生成SolutionCard的mock数据列表
const data = [
  {
    title: "技术专业",
    desc: "技术团队拥有多年、多家大型地产、设计、供应链、建材、电商等行业企业的信息化建设和数字化转型经验，具备从顶层设计、整体规划，到项目策划、蓝图设计的多维度、全链条咨询能力。",
    icon: Peixun1,
  },
  {
    title: "精通行业",
    desc: "业务咨询团队来自世界五百强的中建、中铁等建筑企业，精通建筑全产业链管理，特点具有丰富的建筑建材供应链管理和经营经验。",
    icon: Peixun2,
  },
  {
    title: "IP破圈",
    desc: "咨询老师本人即为垂直行业的头部网红IP，曾在国际知名软件公司、国内著名互联网媒体平台、地产建筑互联网公司任职，精通新媒体打法和流量运营策略，能够为您提供定制贴身IP打造方案。",
    icon: Peixun3,
  },
  {
    title: "深度定制化",
    desc: "紧密围绕建筑建材供应链行业特性与企业个性化需求，量身打造 AI 解决方案。从项目前期的需求调研，到流程规划、节点设计以及方案细化，全程精准匹配企业业务流程，确保方案能切实解决企业实际问题，提升运营效率。",
    icon: Peixun4,
  },
  {
    title: "深度定制化",
    desc: "咨询老师本人即为垂直行业的头部网红IP，曾在国际知名软件公司、国内著名互联网媒体平台、地产建筑互联网公司任职，精通新媒体打法和流量运营策略，能够为您提供定制贴身IP打造方案。",
    icon: Peixun5,
  },
  {
    title: "技术先进性",
    desc: "融合当下前沿 AI 技术，如多模态识别、语意理解、AIGC、深度推理等，赋予解决方案强大功能。像智能合同管理，通过多模态识别自动提取合同关键信息；借助AI文生图能力，生成精准高清宣传海报，为企业线上高效获客的提供源源不断的优质素材。",
    icon: Peixun6,
  },
  {
    title: "高效集成性",
    desc: "注重与企业现有系统的无缝集成，无论是 ERP、CRM 还是其他业务系统，都能实现AI升级，避免前期投入的损失。减少系统间的数据孤岛现象，提升录入的及时性和准确性，同时保障数据的一致性与流畅性，提高企业整体运营效率。",
    icon: Peixun7,
  },
  {
    title: "持续优化性",
    desc: "提供持续的方案优化服务，实时跟踪行业动态与技术发展趋势，根据企业业务变化及时调整优化解决方案。确保企业始终能享受到先进、适用的AI 服务，保持在行业中的竞争优势。",
    icon: Peixun8,
  },
];

const Solution = () => {
  return (
    <div>
      <div className="flex justify-center pt-[63px] pb-[66px]">
        <Title
          title="AI 咨询与解决方案介绍"
          subtitle={"Introduction to AI Consulting and Solutions".toUpperCase()}
        />
      </div>
      <Wrap
        style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
        subtitle="特点与优势"
      >
        <div className="grid grid-cols-4 gap-[80px] pt-[66px] pb-[70px]">
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
    <div className="flex flex-col items-center gap-[22px]">
      <img src={icon as string} alt="" />
      <span className="font-medium text-[24px] text-[#333333] leading-[35px] text-center normal-case">
        {title}
      </span>
      <span className="font-normal text-[18px] text-[#666666] leading-[26px] text-justify normal-case">
        {desc}
      </span>
    </div>
  );
};
