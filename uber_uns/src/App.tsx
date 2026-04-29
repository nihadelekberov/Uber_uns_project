import React from "react";
import { ConfigProvider } from "antd";
import Header from "./components/Header";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThridRow";
import ForthRow from "./components/ForthRow";
import FifthRow from "./components/FifthRow";
import SixthRow from "./components/SixthRow";
import SeventhRow from "./components/SeventhRow";
import EighthRow from "./components/EighthRow";
import NinethRow from "./components/NinethRow";


const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5B4EE8",
          borderRadius: 8,
        },
      }}
    >
      <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
        <Header />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <ForthRow />
        <FifthRow />
        <SixthRow />
        <SeventhRow />
        <EighthRow />
        <NinethRow />
      </div>
    </ConfigProvider>
  );
};

export default App;