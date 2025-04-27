import Xuanfuqiu from "@assets/xuanfuqiu.png";
import { Button, Form, Input, message, Modal, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import Warn from "@assets/warn.png";
import request from "@/api/request";

const AiConsult = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const data = form.getFieldsValue();
    console.log("**** data", data);
    // /message/submit
    try {
      const res = await request.post("api/web/consultation/add", data);
      if (res.code === 200 && res.data.code === 200) {
        form.resetFields();
        setVisible(false);
        message.success("留言成功");
      }
    } catch (e) {
      message.error("留言失败");
    }
  };

  return (
    <>
      <div
        className="fixed right-[50px] top-[40%] z-[9999] cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <img className="w-[76px]" src={Xuanfuqiu} alt="" />
      </div>
      <Modal
        width="70%"
        classNames={{
          content: "!p-0",
        }}
        open={visible}
        title={
          <div
            className="p-[13px] font-bold text-[28px] text-white leading-[34px] tracking-[2px] text-center normal-case"
            style={{
              background: "linear-gradient( 132deg, #3EB6FD 0%, #2F79E3 100%)",
            }}
          >
            开启建筑建材供应链+AI新机遇
          </div>
        }
        onCancel={() => {
          setVisible(false);
        }}
        footer={
          <div className="flex gap-[18px] px-[88px] pb-[34px] justify-between">
            <div className="flex items-center">
              <img src={Warn} alt="" />
              <span className="ml-[10px] text-[14px] text-[#888]">
                我们承诺严格保护您的隐私，所收集信息仅用于与您沟通业务需求。详细隐私政策请查看详情
              </span>
              <a className="text-[#0959F2]">查看详情</a>
            </div>
            <div className="flex gap-[18px]">
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button onClick={handleSubmit} type="primary">
                提交咨询
              </Button>
            </div>
          </div>
        }
      >
        <div className="pt-[50px] px-[88px] pb-[32px]">
          <Form
            form={form}
            layout="horizontal"
            onFinish={() => {
              console.log("**** form", form.getFieldsValue());
              setVisible(false);
            }}
            size="large"
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: "请输入姓名" }]}
              style={{
                display: "inline-block",
                width: "40%",
                marginRight: "20%",
              }}
            >
              <Input
                className="w-full h-[50px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="text"
                placeholder="请输入姓名"
              />
            </Form.Item>

            <Form.Item
              label="手机"
              name="phone"
              rules={[{ required: true, message: "请输入手机" }]}
              style={{ display: "inline-block", width: "40%", height: "36px" }}
            >
              <Input
                className="w-full h-[50px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="string"
                placeholder="请输入手机"
              />
            </Form.Item>

            <Form.Item label="公司名称" name="company">
              <Input
                className="w-full h-[50px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="text"
                placeholder="请输入公司名称"
              />
            </Form.Item>

            <Form.Item
              label="公司规模"
              name="company"
              style={{
                display: "inline-block",
                width: "40%",
                marginRight: "20%",
              }}
            >
              <Select placeholder="请选择公司规模">
                <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                <Select.Option value="Jiangsu">Jiangsu</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name={["address", "street"]}
              style={{
                display: "inline-block",
                width: "40%",
              }}
            >
              <Input placeholder="请输入公司规模" />
            </Form.Item>

            <Form.Item label="咨询需求" name="consultation">
              <Select placeholder="请选择咨询需求">
                <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                <Select.Option value="Jiangsu">Jiangsu</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="您的留言" name="messageContent">
              <TextArea
                className="w-full h-[100px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                placeholder="请输入留言内容"
              />
            </Form.Item>

            {/* <Form.Item className="flex gap-[18px]">
              <div className="flex items-center">
                <img src={Warn} alt="" />
                <span className="ml-[10px] text-[14px] text-[#888]">
                  我们承诺严格保护您的隐私，所收集信息仅用于与您沟通业务需求。详细隐私政策请查看详情
                </span>
                <a className="text-[#0959F2]">查看详情</a>
              </div>
              <Button
                htmlType="submit"
                className="w-full h-[50px] bg-[#3EB6FD] text-white rounded-[4px]"
              >
                提交
              </Button>
            </Form.Item> */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AiConsult;
