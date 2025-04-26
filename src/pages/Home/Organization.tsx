import Wrap from "@/components/Wrap";
import ZuzhijiagouBg from "@assets/zuzhijiagoubg.png";
import AboutBg from "@assets/AboutBg.png";
import Zuzhijiagou from "@assets/zuzhijiagou.png";

const Organization = () => {
  return (
    <Wrap
      subtitle="组织架构"
      bg={ZuzhijiagouBg}
      style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
    >
      <div className="pt-[36px] pb-[79px]">
        <img src={Zuzhijiagou} alt="" />
      </div>
    </Wrap>
  );
};

export default Organization;
