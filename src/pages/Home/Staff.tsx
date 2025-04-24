import StaffCard from "@/components/StaffCard";
import Wrap from "@/components/Wrap";
import HexintuanduiBg from "@assets/hexintuanduichengyuan.png";

const Staff = () => {
  const staffs = [
    {
      avatar: "",
      name: "王小利",
      title: "创始人",
      job: "超人",
      desc: [
        "AI+建筑建材供应链理论及实战专家",
        "AI+建筑建材供应链理论及实战专家",
      ],
    },
  ];
  return (
    <Wrap subtitle="核心团队人员" bg={HexintuanduiBg}>
      <div className="mt-[76px] mb-[100px]">
        {staffs.map((item, index) => {
          return <StaffCard key={index} {...item} />;
        })}
      </div>
    </Wrap>
  );
};

export default Staff;
