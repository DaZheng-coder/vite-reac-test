import Footer from "@/components/Footer";
import ContactUs from "./ContactUs";
import Header from "./Header";
import News from "./News";
import Organization from "./Organization";
import Partner from "./Partner";
import Staff from "./Staff";
import Vision from "./Vision";
import Title from "@/components/Title";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col">
        <News />
        <Title title="关于我们" />
        <Vision />
        <Organization />
        <Staff />
        <Partner />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
