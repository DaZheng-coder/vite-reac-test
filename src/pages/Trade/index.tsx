import Title from "@/components/Title";
import Header from "../Home/Header";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BackArrow from "@assets/backArrow.png";
import { Breadcrumb } from "antd";
import { useMemo } from "react";
import useRouteStore from "@/store/useRouteStore";

// 生成TradeCard的mock数据列表
const data = [
  {
    img: "https://example.com/image1.png",
    title: "供应商1",
    desc: "供应商1的描述信息",
    address: "地址1",
  },
  {
    img: "https://example.com/image2.png",
    title: "供应商2",
    desc: "供应商2的描述信息",
    address: "地址2",
  },
  {
    img: "https://example.com/image3.png",
    title: "供应商3",
    desc: "供应商3的描述信息",
    address: "地址3",
  },
];

const Trade = () => {
  return (
    <div className="mt-[64px]">
      <Outlet />
    </div>
  );
};

const imgData = [
  "https://example.com/image1.png",
  "https://example.com/image2.png",
  "https://example.com/image3.png",
];

export default Trade;

export const TradeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routeConfig = useRouteStore((state) => state.routeConfig);

  const breadcrumbPaths = useMemo(() => {
    const paths = location.pathname.split("/").filter((path) => path);
    let res = [];
    let source = routeConfig;
    for (let i = 0; i < paths.length; i++) {
      const target = source.find(
        (item) => item.path.replace("/", "") === paths[i].replace("/", "")
      );
      if (target) {
        res.push({
          title: target.label,
        });
        source = target.children;
      }
    }
    return res;
  }, [location.pathname]);

  const titleCls = "text-[20px] text-[#1F2329] font-[500] leading-[29px]";

  const renderSubtitle = (title) => {
    return (
      <div className={`${titleCls} relative my-[24px]`}>
        <span className="relative z-10">{title}</span>
        <div className="absolute bottom-[5px] left-0 w-[88px] h-[6px] bg-[#D5FDF0] rounded-none"></div>
      </div>
    );
  };

  const renderCompanyInfo = () => {
    return (
      <div>
        {renderSubtitle("公司信息")}
        <div className=" py-[8px] px-[18px] bg-[#FDFEFF] rounded-[6px] border border-[#CAE2FF] border-dashed">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="w-[54px] h-[54px] flex-shrink-0" src="" alt="" />
              <span className="text-[16px] text-[#1E2983] ml-[12px]">
                广东省鑫筑邦供应链科技有限公司
              </span>
            </div>
            <div>
              <span className="text-[16px] text-[#333333]">公司地址：</span>
              <span className="text-[16px] text-[#333]">
                广州市南沙区黄阁镇市南公路黄阁段230号（自编一栋）102房（仅限办公）
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCompanyDesc = () => {
    return (
      <div>
        {renderSubtitle("公司简介")}
        <p className="text-[14px] text-[#333]">
          广东省鑫筑邦供应链科技有限公司位于粤港澳大湾区几何中心广州南沙自贸区，是一家依托加气混凝土行业，运用互联网思维，集循环贸易、循环物流为一体的专业化服务平台。公司以粤港澳大湾区为起点，通过整合加气混凝土上下游资源，利用技术及管理优势，为客户提供质量更优、成本更低、综合效益更好的解决方案。
          针对终端用户，公司现已与惠州鑫业、惠州亚巴郎、东莞名亿、广州沙南二厂、广州明忠、深圳宏诺等多个厂家达成战略合作意向，年供应能力超150万方，可为广、深、莞、惠等四个主要城市及其周边地区施工项目提供加气砖直供服务。公司同步构建产品质量可追溯体系，确保产品全程可控，为业主提供品质一流的产品和服务。
          针对合作厂家，公司通过专业化集中采购服务，结合原材料创新、驻场式技术指导、产品配方优化、包销或委托销售等模式，为厂家提供采、运、销一揽子解决方案，助力降本增效。
          针对行业经销商，我们通过卓越的标准化管理、全程可视的数字化平台，提供交易撮合、产品采供、跟单结算决算、循环物流等全方位服务，提升效率，降低损耗，让经销商更加专注于服务客户，拓展业务空间。
          公司以奋斗者为本，积极引进行业高端人才，力求构建“线上＋线下”、“实体＋虚拟”的商业模式，以解决传统加气混凝土行业长期存在的痛点和堵点。未来，公司还将在打造智慧工厂、搭建金融解决路径等方面加速布局，与上下游客户一道共筑行业互联生态圈。
        </p>
      </div>
    );
  };

  const renderCompanyImgs = () => {
    return (
      <div>
        {renderSubtitle("公司图片")}
        <div className="grid grid-cols-2 gap-4">
          {imgData.map((item, key) => {
            return <img key={key} className="object-cover" src={item} alt="" />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="px-[13.5%]">
      <div className="my-[28px] flex justify-between">
        <div
          className="flex gap-[2px] items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img className="w-[14px] h-[14px]" src={BackArrow} alt="" />
          <span className="text-[14px] text-[#87898C]">返回</span>
        </div>
        <div className="flex gap-[2px]">
          <span>当前位置：</span>
          <Breadcrumb items={breadcrumbPaths} separator=">" />
        </div>
      </div>
      <div className="py-[30px] px-[42px] bg-white shadow-[0px_6px_14px_0px_rgba(29,45,63,0.04)] rounded-[6px]">
        {renderCompanyInfo()}
        {renderCompanyDesc()}
        {renderCompanyImgs()}
      </div>
    </div>
  );
};

export const TradeList = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[13.5%]">
      <div className="my-[48px] flex justify-center">
        <Title
          title="合作供应商"
          subtitle={"Cooperative suppliers".toUpperCase()}
        />
      </div>
      <div className="flex gap-[25px] pb-[110px]">
        {data.map((item, key) => {
          return (
            <TradeCard
              key={key}
              {...item}
              onClick={() => {
                // *** todo 补充id
                navigate("/trade/detail");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const TradeCard = ({
  img,
  title,
  desc,
  address,
  onClick,
}: {
  img: string;
  title: string;
  desc: string;
  address: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[30%] flex flex-col gap-[12px]"
    >
      <img className="w-full" src={img} alt="" />
      <span className="text-[20px] text-[#333] truncate">{title}</span>
      <span className="text-[16px] text-[#666] line-clamp-3">{desc}</span>
      <span className="text-[16px] text-[#999] truncate">
        公司地址：{address}
      </span>
    </div>
  );
};
