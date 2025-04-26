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
    console.log("*** getStaffs res", res.data);
    setStaffs(res.data?.data || []);
  };

  useEffect(() => {
    getStaffs();
  }, []);

  return (
    <Wrap
      subtitle="核心团队人员"
      bg={HexintuanduiBg}
      style={{ paddingLeft: "13.5%", paddingRight: "13.5%" }}
    >
      <div className="pt-[76px] pb-[100px]">
        {staffs.map((item, index) => {
          return (
            <StaffCard
              key={index}
              avatar={item.avatarUrl as string}
              name={item.name as string}
              position={item.position as string}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default Staff;
