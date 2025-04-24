import { routeConfig } from "@/route";
import { Link } from "react-router-dom";
import WxQrCode from "../WxQrCode";
import Police from "@assets/police.png";

const Footer = () => {
  const sectionTitleCls =
    "font-normal text-[14px] text-[#8B8B8B] leading-[20px] text-left";
  const liTextCls =
    "font-normal text-[14px] text-white leading-[20px] text-left";
  const footerTextCls =
    "font-normal text-[14px] text-[#AFAFAF] leading-[20px] text-left normal-case";

  const renderLinks = () => {
    return (
      <div className="flex flex-col gap-[12px]">
        <span className={sectionTitleCls}>快捷导航</span>
        {routeConfig.map((item, index) => {
          return (
            <Link to={item.path} className={liTextCls} key={index}>
              {item.label}
            </Link>
          );
        })}
      </div>
    );
  };

  const renderPolicy = () => {
    return (
      <div className="flex flex-col gap-[12px]">
        <span className={sectionTitleCls}>隐私政策</span>
        <Link to={""} className={liTextCls}>
          隐私政策与服务条款
        </Link>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="flex flex-col gap-[12px]">
        <span className={sectionTitleCls}>联系方式</span>
        <span className={liTextCls}>联系人：王恩伟(老羌)</span>
        <span className={liTextCls}>电话：18923093405</span>
        <span className={liTextCls}>邮箱：wangenwei@gziclt.com</span>
        <span className={liTextCls}>
          地址：广州市南沙区黄阁镇市南公路黄阁段230号(自编三栋)101-151
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#1E2B3E]">
      <div className="flex justify-center items-center">
        <div className="flex gap-[88px] p-[24px]">
          {renderLinks()}
          {renderPolicy()}
          {renderContact()}
          <WxQrCode />
        </div>
      </div>
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.3)",
          borderRadius: "0px 0px 0px 0px",
        }}
      ></div>
      <div className="flex justify-center p-[24px] gap-[37px] items-center">
        <span className={footerTextCls}>
          © 2024 Copyright 广州建采绿碳供应链科技有限公司版权所有
        </span>
        <span className={footerTextCls}>蜀ICP备1900447号-1</span>
        <div className="flex items-center gap-[6px]">
          <img className="w-[18px] h-[20px]" src={Police} alt="" />
          <span className={footerTextCls}>公安网备11010802013228号</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
