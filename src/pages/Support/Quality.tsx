import Wrap from "@/components/Wrap";
import GreenArrow from "@assets/GreenArrow.png";
import BlueArrow from "@assets/BlueArrow.png";
import Img0001 from "@assets/0001.png";
import Img0002 from "@assets/0002.png";
import Img0003 from "@assets/0003.png";
import Img0004 from "@assets/0004.png";
import Img0005 from "@assets/0005.png";

const data = [
  {
    img: Img0001,
    desc: "项目启动阶段与客户深入沟通需求，明确项目目标、功能要求、交付时间等关键信息，形成详细需求文档并与客户确认签字。",
    arrow: "green",
  },
  {
    img: Img0002,
    desc: "根据需求文档设计技术方案，包括系统架构、技术选型、开发计划等。组织内部和客户评审，确保方案满足需求且技术可行。",
    arrow: "blue",
  },
  {
    img: Img0003,
    desc: "按照开发计划，采用敏捷开发方法，定期进行代码审查和质量检查。开发完成后进行全面功能、性能、安全测试等，确保产品质量。",
    arrow: "green",
  },
  {
    img: Img0004,
    desc: "在规定时间内完成产品交付，协助客户进行系统部署上线。提供培训和技术支持，确保客户顺利使用产品。",
    arrow: "blue",
  },
  {
    img: Img0005,
    desc: "提供完善售后服务，及时响应客户反馈问题，进 行系统维护和升级，保障产品长期稳定运行。",
    arrow: "green",
  },
];

const Quality = () => {
  return (
    <Wrap
      subtitle="交付流程与质量保障"
      style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
    >
      <div className="flex flex-wrap pt-[50px]">
        {data.map((item, index) => {
          return <StepCard key={index} {...item} arrow={item.arrow} />;
        })}
      </div>
    </Wrap>
  );
};

export default Quality;

const StepCard = ({
  img,
  desc,
  arrow,
}: {
  img: string;
  desc: string;
  arrow: "green" | "blue";
}) => {
  return (
    <div className="flex mb-[60px]">
      <div className="w-[390px]">
        <img src={img} alt="" />
        <p className="mt-[37px] text-[18px] text-[#333]">{desc}</p>
      </div>
      <img
        className="mx-[38px] mt-[52px] w-[38px] h-[25px]"
        src={arrow === "green" ? GreenArrow : BlueArrow}
        alt=""
      />
    </div>
  );
};
