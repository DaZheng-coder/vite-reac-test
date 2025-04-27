import Wrap from "@/components/Wrap";
import Peixuntixi from "@assets/peixuntixi.png";

const Classes = () => {
  return (
    <Wrap
      style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
      subtitle="培训课程体系"
    >
      <img className="pt-[24px] pb-[72px]" src={Peixuntixi} alt="" />
    </Wrap>
  );
};

export default Classes;
