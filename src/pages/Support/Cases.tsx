import request from "@/api/request";
import ImgDesc from "@/components/ImgDesc";
import Wrap from "@/components/Wrap";
import { TrainingCase } from "@/types";
import { useState } from "react";
import Peixunyuchengguo from "@assets/peixunyuchengguo.png";

const Cases = () => {
  // const data = mockData;
  const [data, setData] = useState<TrainingCase[]>([]);

  const getCase = async () => {
    const res = await request.get("api/case/list");
    setData(res.data?.data);
  };

  useState(() => {
    getCase();
  }, []);

  return (
    <Wrap
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        background: "#FBFCFE",
      }}
      bg={Peixunyuchengguo}
      subtitle="培训成果与案例"
    >
      <div className="pt-[60px] pb-[87px] flex flex-col gap-[102px]">
        {data.map((item, index) => {
          return (
            <ImgDesc
              key={index}
              reverse={index % 2 === 0}
              img={item.coverUrl as string}
              title={item.title as string}
              desc={JSON.parse(item.content || "[]")}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default Cases;
