import ImgDesc from "@/components/ImgDesc";
import Wrap from "@/components/Wrap";
import Yes from "@assets/yes.png";

// 生成几个CaseCard的mock数据
const mockData = [
  {
    img: "https://example.com/image1.png",
    title: "案例标题1",
    desc: ["描述1", "描述2", "描述3"],
  },
  {
    img: "https://example.com/image2.png",
    title: "案例标题2",
    desc: ["描述1", "描述2", "描述3"],
  },
  {
    img: "https://example.com/image3.png",
    title: "案例标题3",
    desc: ["描述1", "描述2", "描述3"],
  },
];

const Cases = () => {
  const data = mockData;
  return (
    <Wrap
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        background: "#FBFCFE",
      }}
      subtitle="培训成果与案例"
    >
      <div className="mt-[60px] mb-[87px] flex flex-col gap-[102px]">
        {data.map((item, index) => {
          return <ImgDesc key={index} reverse={index % 2 === 0} {...item} />;
        })}
      </div>
    </Wrap>
  );
};

export default Cases;
