import request from "@/api/request";
import ImgDesc from "@/components/ImgDesc";
import Wrap from "@/components/Wrap";
import { AiSuccessCase } from "@/types";
import { useState } from "react";

const SuccessCasesView = () => {
  const [cases, setCases] = useState<AiSuccessCase[]>([]);

  const getCase = async () => {
    const res = await request.get("api/ai/success/case/list");
    setCases(res.data?.data);
  };

  useState(() => {
    getCase();
  }, []);

  return (
    <Wrap
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        background: "white",
      }}
      subtitle="成功案例展示"
    >
      <div className="pt-[60px] pb-[87px] flex flex-col gap-[102px]">
        {cases.map((item, index) => {
          return (
            <ImgDesc
              key={index}
              reverse={index % 2 === 0}
              img={item.imageUrl || ""}
              title={item.title || ""}
              desc={JSON.parse(item.content || "[]") as string[]}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default SuccessCasesView;
