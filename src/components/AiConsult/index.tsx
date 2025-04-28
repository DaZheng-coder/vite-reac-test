import Xuanfuqiu from "@assets/xuanfuqiu.png";
import { Button, Form, Input, message, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import Warn from "@assets/warn.png";
import request from "@/api/request";
import { CompanyScaleOption, ConsultationNeedOption } from "@/types";

const AiConsult = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [companySize, setCompanySize] = useState<CompanyScaleOption[]>([]);
  const [aiConsultList, setAiConsultList] = useState<ConsultationNeedOption[]>(
    []
  );

  const getCompanySize = async () => {
    const res = await request.get("api/company/scale-option/list");
    setCompanySize(res.data?.data || []);
  };

  const getAiConsultList = async () => {
    const res = await request.get("api/web/consultation/need-option/list");
    setAiConsultList(res.data?.data || []);
  };

  const handleSubmit = async () => {
    const data = form.getFieldsValue();
    console.log("data", data);
    // /message/submit
    try {
      const res = await request.post("api/web/consultation/add", data);
      console.log("res", res);
      if (res.status === 200 && res.data?.code === 200) {
        form.resetFields();
        setVisible(false);
        messageApi.success("留言成功");
      }
    } catch (e) {
      const msg = e.response?.data?.message || "留言失败";
      messageApi.error(msg);
    }
  };

  console.log("companySize", companySize);

  useEffect(() => {
    getCompanySize();
    getAiConsultList();
  }, []);

  return (
    <>
      {contextHolder}
      <div
        className="fixed right-[50px] top-[40%] z-[9999] cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <img className="w-[76px]" src={Xuanfuqiu} alt="" />
        <div className="absolute text-[14px] top-[42px] left-[10px] text-[#fff]">
          商机留言
        </div>
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
              rules={[
                { required: true, message: "请输入手机" },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "请输入有效的手机号",
                },
              ]}
              style={{ display: "inline-block", width: "40%", height: "36px" }}
            >
              <Input
                className="w-full h-[50px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="string"
                placeholder="请输入手机"
              />
            </Form.Item>

            <Form.Item label="公司名称" name="companyName">
              <Input
                className="w-full h-[50px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="text"
                placeholder="请输入公司名称"
              />
            </Form.Item>

            <Form.Item
              label="公司规模"
              name="companyScaleId"
              style={{
                display: "inline-block",
                width: "40%",
                marginRight: "20%",
              }}
            >
              <Select placeholder="请选择公司规模">
                {companySize.map((item) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name="companyScaleText"
              style={{
                display: "inline-block",
                width: "40%",
              }}
            >
              <Input placeholder="请输入公司规模" />
            </Form.Item>

            <Form.Item label="咨询需求" name="consultationNeedId">
              <Select placeholder="请选择咨询需求">
                {aiConsultList.map((item) => {
                  return (
                    <Select.Option value={item.id} key={item.id}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item label="您的留言" name="message">
              <TextArea
                className="w-full h-[100px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                placeholder="请输入留言内容"
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AiConsult;
