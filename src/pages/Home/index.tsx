import ContactUs from "./ContactUs";
import News from "./News";
import Organization from "./Organization";
import Partner from "./Partner";
import Staff from "./Staff";
import Vision from "./Vision";
import Title from "@/components/Title";

const Home = () => {
  return (
    <div>
      <News />
      <Title title="关于我们" subtitle="ORIENTATION" />
      <Vision />
      <Organization />
      <Staff />
      <Partner />
      <ContactUs />
    </div>
  );
};

export default Home;
