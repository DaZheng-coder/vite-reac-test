import request from "@/api/request";
import ImgDesc from "@/components/ImgDesc";
import Wrap from "@/components/Wrap";
import { AiProjectDeliveryCase } from "@/types";
import { useState } from "react";

const SuccessCases = () => {
  const [cases, setCases] = useState<AiProjectDeliveryCase[]>([]);
  const getCase = async () => {
    const res = await request.get("api/ai/project/delivery/case/list");
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
              img={item.imageUrl as string}
              title={item.title as string}
              desc={[item.subtitle as string]}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default SuccessCases;
