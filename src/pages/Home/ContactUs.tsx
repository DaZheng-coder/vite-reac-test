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
import request from "@/api/request";

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
  const [form] = Form.useForm();

  const submit = async () => {
    // /message/submit
    const data = form.getFieldsValue();
    const res = await request.post("api/message/submit", data);
    if (res.code === 200 && res.data.code === 200) {
      form.resetFields();
      alert("留言成功");
    }
  };

  const renderForm = () => {
    return (
      <div
        style={{ border: "1px solid #5EBCFF" }}
        className="w-[698px] mt-[30px]  rounded-[4px] p-[48px] bg-[rgba(22,124,248,0.5)]"
      >
        <Form form={form} onFinish={submit}>
          <Form.Item required name="name">
            <Input type="text" placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item required name="company">
            <Input type="text" placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item required name="messageContent">
            <TextArea autoSize={{ minRows: 5 }} placeholder="请输入留言内容" />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button htmlType="submit" className="w-[294px]" ghost>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

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
      <div className="flex flex-col gap-[18px] pt-[54px] pb-[26px]">
        {contactData.map((item, index) => {
          return (
            <div className="flex gap-[4px] items-center" key={index}>
              <img src={item.icon} alt="" />
              <span className="text-white">{item.label}</span>
              <span className="text-white">{item.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        background: `url(${ContactUsBg}) no-repeat center`,
        backgroundSize: "cover",
      }}
      className="w-full flex flex-col  items-center py-[38px]"
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
