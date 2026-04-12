import React from "react";
import { ConfigProvider } from "antd";
import Header from "./components/Header";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThridRow";

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
      </div>
    </ConfigProvider>
  );
};

export default App;