import Wrap from "@/components/Wrap";
import Process01 from "@assets/process01.png";
import Process02 from "@assets/process02.png";
import Process03 from "@assets/process03.png";
import Process04 from "@assets/process04.png";

// 生成ProcessCard的mock数据列表
const data = [
  {
    title: "需求分析",
    desc: [
      "与客户沟通，了解客户的需求和目标。",
      "收集相关数据和信息，进行初步分析。",
    ],
    icon: Process01,
  },
  {
    title: "方案设计",
    desc: ["根据需求分析结果，设计初步解决方案。", "制定项目计划和时间表。"],
    icon: Process02,
  },
  {
    title: "实施与测试",
    desc: [
      "根据设计方案进行系统开发和实施。",
      "进行系统测试，确保系统功能正常。",
    ],
    icon: Process03,
  },
  {
    title: "交付与培训",
    desc: ["将系统交付给客户，并进行相关培训。", "提供后续支持和维护服务。"],
    icon: Process04,
  },
];

const Process = () => {
  return (
    <Wrap
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        background: "#FBFCFE",
      }}
      subtitle="咨询和解决方案工作流程"
    >
      <div className="flex flex-col gap-[46px] pt-[45px] pb-[80px]">
        {data.map((item, index) => {
          return <ProcessCard key={index} {...item} />;
        })}
      </div>
    </Wrap>
  );
};

export default Process;

const ProcessCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string[];
}) => {
  return (
    <div className="flex items-center gap-[53px]">
      <img src={icon} alt="" />
      <div className="flex-1 bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] rounded-[6px] py-[16px] px-[24px]">
        <div className="text-[20px] font-bold text-[#333] mb-[14px]">
          {title}
        </div>
        <div className="flex flex-col gap-[8px]">
          {desc.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[18px] text-[#666] flex items-center"
              >
                · {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
