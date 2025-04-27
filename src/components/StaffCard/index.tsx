import RightArrow from "@assets/rightArrow.png";

const StaffCard = (props: {
  avatar: string;
  title: string;
  job: string;
  desc: string[];
}) => {
  const { avatar, title, job, desc } = props;
  return (
    <div className="flex relative">
      <img
        className="w-[300px] h-[300px] ml-[18px] border-none outline-none"
        src={avatar}
        alt=""
      />
      <div
        style={{
          boxShadow: "0px 6px 14px 0px rgba(0,0,0,0.05)",
          borderRadius: "0px 6px 6px 0px",
        }}
        className="flex flex-col bg-white gap-[24px] px-[18px] py-[10px]"
      >
        <div className="flex gap-[10px] w-[394px] items-center">
          <span className="text-[#0758F1] font-bold text-[24px]">{title}</span>
          <div className="py-[5px] px-[26px] bg-[#EEF7FD] text-[#3573FD] text-[14px] rounded-[4px]">
            {job}
          </div>
        </div>
        {(desc || []).map((item, index) => {
          return (
            <div className="flex gap-[9px] items-center" key={index}>
              <img src={RightArrow} alt="" />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaffCard;
