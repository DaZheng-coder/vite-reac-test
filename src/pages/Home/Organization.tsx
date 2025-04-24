import Wrap from "@/components/Wrap";
import ZuzhijiagouBg from "@assets/zuzhijiagoubg.png";
import AboutBg from "@assets/AboutBg.png";
import Zuzhijiagou from "@assets/zuzhijiagou.png";

const Organization = () => {
  return (
    <Wrap subtitle="组织架构" bg={ZuzhijiagouBg}>
      <div className="mt-[36px] mb-[79px]">
        <img className="w-[1266px] h-[544px]" src={Zuzhijiagou} alt="" />
      </div>
    </Wrap>
  );
};

export default Organization;
