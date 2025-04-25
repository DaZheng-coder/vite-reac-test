import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { ReactNode } from "react";
import Dengpao from "@assets/dengpao.png";
import Qianbi from "@assets/qianbi.png";
import Yingyong from "@assets/yingyong.png";
import Wrap from "@/components/Wrap";
import Peixunneirong from "@assets/peixunneirongyoushi.png";
import ColImgDesc from "@/components/ColImgDesc";

const data = [
  {
    title: "原创性",
    desc: "课程内容基于团队行业经验和对 A1的理解，精心打造，融入实战案例和独特见解，确保知识实用且贴合行业需求",
    icon: Dengpao,
  },
  {
    title: "定制化",
    desc: "根据客户行业和工作场景差异，量身定制培训内容，如针对建筑企业和建材贸易企业的不同培训重点，提高培训针对性和实用性。",
    icon: Qianbi,
  },
  {
    title: "行业针对性",
    desc: "紧密围绕地产、建筑、建材、供应链行业工作场景，引入实际案例，帮助学员理解 AI在行业中的应用和价值，便于学员将知识应用到工作中。",
    icon: Yingyong,
  },
];

const AIKnowledge = () => {
  return (
    <Wrap
      style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
      subtitle="培训内容优势"
      bg={Peixunneirong}
    >
      <div className="flex gap-[61px] pt-[54px] pb-[84px]">
        {data.map((item, index) => {
          return (
            <ColImgDesc
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          );
        })}
      </div>
    </Wrap>
  );
};
export default AIKnowledge;
