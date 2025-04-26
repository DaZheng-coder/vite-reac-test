import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./pages/Home/Header";
import { Suspense } from "react";
import RouteView from "./RouteView";
import { ConfigProvider, Spin } from "antd";

function App() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="w-full h-screen flex justify-center items-center"
        />
      }
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#25B728",
          },
        }}
      >
        <div className="pt-[46px]">
          <Nav />
          <Header />
          <RouteView />
          <Footer />
        </div>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;
