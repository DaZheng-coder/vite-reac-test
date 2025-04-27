import request from "@/api/request";
import Title from "@/components/Title";
import { SurveyQuestion } from "@/types";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";

interface QuestionConfigItem {
  title: string;
  type: string;
  multiple?: boolean;
  options?: { value: string; label: string }[];
  showOther?: boolean;
}

const Question = () => {
  const [form] = Form.useForm();

  const [questionConfig, setQuestionConfig] = useState<QuestionConfigItem[]>(
    []
  );

  const getQuestion = async () => {
    const res = await request.get("api/survey/question/list");
    if (res.data?.data) {
      const data = res.data?.data.map((item: SurveyQuestion) => {
        return {
          title: item.questionText,
          type: item.questionType === "text" ? "textarea" : "checkbox",
          multiple: item.questionType === "multiple",
          options: JSON.parse(item.optionText || "[]").map((item) => {
            return {
              label: item,
              value: item,
            };
          }),
          showOther: item.questionType !== "text",
        };
      });
      setQuestionConfig(data);
    }
    console.log("*** res", res);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const renderHeader = () => {
    return (
      <>
        <div className="my-[50px]">
          <Title
            title="广州建采绿碳 AI+SAAS 产品需求调查问卷"
            subtitle={"Product Requirements Survey Questionnaire".toUpperCase()}
          />
        </div>
        <div className="mb-[30px] py-[36px] px-[40px] bg-[#FDFEFF] rounded-[6px] border border-[#CAE2FF] border-dashed">
          <div className="text-[18px] text-[#0758F1] leading-[32px]">
            尊敬的客户：
          </div>
          <div className="text-[18px] text-[#0758F1] leading-[32px]">
            您好！非常感谢您参与我们的问卷调查。广州建采绿碳致力于为建筑建材行业打造创新的
            AI+SAAS
            产品，为了更好地满足您的需求，提升产品质量，我们特开展此次调研。您的宝贵意见对我们至关重要，请根据实际情况填写，问卷大约需要
            5 分钟完成，再次感谢您的支持与配合！
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="px-[13.5%] pb-[80px]">
      {renderHeader()}
      <div className="text-[#666] py-[30px] px-[34px] bg-white shadow-[0px_6px_14px_0px_rgba(29,45,63,0.04)] rounded-[6px]">
        <Form
          layout="vertical"
          form={form}
          className="flex flex-col gap-[30px]"
        >
          {questionConfig.map((item, index) => {
            if (item.type === "checkbox") {
              return (
                <Form.Item name="" label={item.title} layout="vertical">
                  <Checkbox.Group
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      marginTop: "20px",
                    }}
                  >
                    {item.options?.map((option, index) => {
                      return (
                        <Checkbox value={option.value} key={index}>
                          {option.label}
                        </Checkbox>
                      );
                    })}
                  </Checkbox.Group>
                  <Form.Item
                    name=""
                    layout="vertical"
                    style={{ paddingTop: "20px" }}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </Form.Item>
              );
            } else if (item.type === "textarea") {
              return (
                <Form.Item name="" label={item.title} layout="vertical">
                  <Input.TextArea />
                </Form.Item>
              );
            }
          })}
          <Form.Item
            layout="horizontal"
            style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
          >
            <Button className="w-[146px]">取消</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="ml-[30px] w-[146px]"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Question;
