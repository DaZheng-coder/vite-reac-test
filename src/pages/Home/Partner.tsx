import Wrap from "@/components/Wrap";
import Hezuohuopan from "@assets/hezuohuopan.png";
import Huopan01 from "@assets/huopan01.png";
import Huopan02 from "@assets/huopan02.png";
import Huopan03 from "@assets/huopan03.png";
import Huopan04 from "@assets/huopan04.png";
import Huopan05 from "@assets/huopan05.png";
import Huopan06 from "@assets/huopan06.png";
import Huopan07 from "@assets/huopan07.png";
import Huopan08 from "@assets/huopan08.png";
import Huopan09 from "@assets/huopan09.png";
import Huopan010 from "@assets/huopan010.png";

const Partner = () => {
  const data = [
    Huopan01,
    Huopan02,
    Huopan03,
    Huopan04,
    Huopan05,
    Huopan06,
    Huopan07,
    Huopan08,
    Huopan09,
    Huopan010,
  ];

  return (
    <Wrap
      subtitle="合作伙伴"
      bg={Hezuohuopan}
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pb-[100px] pt-[80px] flex  flex-wrap mx-[-13.5%]">
        {data.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </div>
    </Wrap>
  );
};

export default Partner;
