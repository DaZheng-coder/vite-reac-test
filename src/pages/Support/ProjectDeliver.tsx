import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { ReactNode } from "react";
import Dengpao from "@assets/dengpao.png";
import Qianbi from "@assets/qianbi.png";
import Yingyong from "@assets/yingyong.png";
import Wrap from "@/components/Wrap";
import Peixunneirong from "@assets/peixunneirongyoushi.png";
import ColImgDesc from "@/components/ColImgDesc";

import Aihead from "@assets/aihead.png";
import AiDna from "@assets/aidnaimg.png";
import AiBuild from "@assets/aibuildimg.png";

const data = [
  {
    title: "AI智能体交付团队",
    desc: "精通知识库、智能体等新兴 AI 开发术，同时具备丰富的传统数字化项目经验。能够构建高效知识库系统，开发智能体实现自动化业务流程处理，提升企业运营效率和决策能力。",
    icon: Aihead,
  },
  {
    title: "AI数字化转型团队",
    desc: "精通知识库、智能体等新兴 AI 开发术，同时具备丰富的传统数字化项目经验。能够构建高效知识库系统，开发智能体实现自动化业务流程处理，提升企业运营效率和决策能力。",
    icon: AiDna,
  },
  {
    title: "AI+建筑交付团队 (生态合作伙伴:深圳智飞网络)",
    desc: "哈工大博士创业团队，在建筑 + AI 领域经验丰富，有众多成功案例和标准产品。擅长将 AI 技术应用于建筑设计、施工管理、建筑安全监测等环节，优化建筑流程，提高建筑质量和安全性。",
    icon: AiBuild,
  },
];

const ProjectDeliver = () => {
  return (
    <div className="bg-[#FBFCFE]">
      <div className="flex justify-center pt-[63px]">
        <Title
          title="AI项目交付"
          subtitle={"AI project delivery".toUpperCase()}
        />
      </div>
      <div>
        <Wrap
          style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
          subtitle="交付团队介绍"
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
      </div>
    </div>
  );
};
export default ProjectDeliver;
