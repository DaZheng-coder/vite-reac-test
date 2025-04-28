import RightArrow from "@assets/rightArrow.png";

const StaffCard = (props: {
  avatar: string;
  title: string;
  job: string;
  desc: string[];
}) => {
  const { avatar, title, job, desc } = props;
  return (
    <div className="flex flex-1 relative items-start">
      <img
        className="w-[40%] border-none outline-none object-contain"
        src={avatar}
        alt=""
      />
      <div
        style={{
          boxShadow: "0px 6px 14px 0px rgba(0,0,0,0.05)",
          borderRadius: "0px 6px 6px 0px",
        }}
        className="relative flex w-[60%] pb-[40%] flex-col bg-white gap-[24px] "
      >
        <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 px-[18px] py-[10px] flex flex-col">
          <div className="flex gap-[10px] items-center">
            <span className="text-[#0758F1] font-bold text-[24px]">
              {title}
            </span>
            <div className="py-[5px] px-[26px] bg-[#EEF7FD] text-[#3573FD] text-[14px] rounded-[4px]">
              {job}
            </div>
          </div>
          <div className="flex-1 gap-[10px] flex flex-col overflow-scroll">
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
      </div>
    </div>
  );
};

export default StaffCard;
