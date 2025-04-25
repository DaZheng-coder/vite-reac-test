import Title from "@/components/Title";
import Chanpin from "@assets/chanpinlinianbeijing.png";
import LinianBg from "@assets/linianbg.png";

const Mind = () => {
  return (
    <div
      style={{
        background: `url(${Chanpin})`,
      }}
      className="px-[17.1%] pb-[60px]"
    >
      <div className="py-[60px]">
        <Title title="产品理念" subtitle={"product idea".toUpperCase()} />
      </div>
      <img src={LinianBg} alt="" />
    </div>
  );
};

export default Mind;
