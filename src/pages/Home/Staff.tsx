import request from "@/api/request";
import StaffCard from "@/components/StaffCard";
import Wrap from "@/components/Wrap";
import { CoreTeamMember } from "@/types";
import HexintuanduiBg from "@assets/hexintuanduichengyuan.png";
import { useEffect, useState } from "react";

const Staff = () => {
  const [staffs, setStaffs] = useState<CoreTeamMember[]>([]);

  const getStaffs = async () => {
    const res = await request.get("api/team/all");
    setStaffs(res.data?.data || []);
  };

  useEffect(() => {
    getStaffs();
  }, []);

  return (
    <Wrap
      subtitle="核心团队人员"
      bg={HexintuanduiBg}
      style={{
        paddingLeft: "13.5%",
        paddingRight: "13.5%",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-[76px] pb-[100px] grid grid-cols-2 gap-[30px]">
        {staffs.map((item, index) => {
          return (
            <StaffCard
              key={index}
              title={item.teamName || ""}
              avatar={item.avatarUrl as string}
              job={item.position as string}
              desc={JSON.parse(item.description || "[]") as string[]}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default Staff;
