import Title from "../../components/Title";
import ArrowLeft from "@assets/3ArrowLeft.png";
import ArrowRight from "@assets/3ArrowRight.png";
import ContactUsBg from "@assets/lianxiwomenbg.png";
import Avatar from "@assets/avatar.png";
import Phone from "@assets/phone.png";
import Email from "@assets/email.png";
import Position from "@assets/position.png";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import WxQrCode from "@/components/WxQrCode";

const contactData = [
  {
    icon: Avatar,
    label: "联系人：",
    value: "王恩伟(老羌)",
  },
  {
    icon: Phone,
    label: "电话：",
    value: "18923093405",
  },
  {
    icon: Email,
    label: "邮箱：",
    value: "wangenwei@gziclt.com",
  },
  {
    icon: Position,
    label: "地址：",
    value: "广州市南沙区黄阁镇市南公路黄阁段230号(自编三栋)101-151",
  },
];

const ContactUs = () => {
  const renderSubTitle = (title: string) => {
    return (
      <div className="flex gap-[20px] items-center">
        <img src={ArrowLeft} alt="" />
        <span className="text-[20px] text-white font-bold">{title}</span>
        <img src={ArrowRight} alt="" />
      </div>
    );
  };

  const renderContactInfo = () => {
    return (
      <div className="flex flex-col gap-[18px] mt-[54px] mb-[26px]">
        {contactData.map((item, index) => {
          return (
            <div className="flex gap-[4px] items-center" key={index}>
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="w-[698px] mt-[30px] border-1 rounded-[4px] border-[#5EBCFF]">
        <Form>
          <Form.Item name="name">
            <Input type="text" placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item name="company">
            <Input type="text" placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item name="company">
            <TextArea autoSize={{ minRows: 5 }} placeholder="请输入留言内容" />
          </Form.Item>
          <Form.Item>
            <Button className="w-[294px]" type="default">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div
      style={{ background: `url(${ContactUsBg}) no-repeat center` }}
      className="w-full flex flex-col  items-center"
    >
      <Title title="联系我们" subtitle="ORIENTATION" color="white" />
      <div className="flex mt-[30px]">
        <div className="pr-[97px]">
          {renderSubTitle("联系方式")}
          {renderContactInfo()}
          <WxQrCode />
        </div>
        <div>
          {renderSubTitle("我要留言")}
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
