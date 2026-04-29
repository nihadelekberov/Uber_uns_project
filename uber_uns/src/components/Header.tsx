import React from "react";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";


{/* bu iki dropdown ici sekilde gorunmurdu ona gore chatGpt den yazdim*/}

const uberUnsItems: MenuProps["items"] = [
  { key: "1", label: "Über uns" },
  { key: "2", label: "Team" },
  { key: "3", label: "Partner" },   
];

const deItems: MenuProps["items"] = [
  { key: "de", label: "DE" },
  { key: "en", label: "EN" },
];

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "64px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{fontSize: "18px",fontWeight: 600,color: "black",cursor: "pointer"}}>
        GBE gGmbH
      </div>

      <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <Dropdown menu={{ items: uberUnsItems }} placement="bottomLeft">
          <a
            onClick={(e) => e.preventDefault()}
            style={{ color: "#555", fontSize: "14px", cursor: "pointer" }}
          >
            <Space>
              Über uns
              <DownOutlined style={{ fontSize: "10px" }} />
            </Space>
          </a>
        </Dropdown>

        {["Weiterbildung", "Förderung", "Für Unternehmen"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              color: "#555",
              fontSize: "14px",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5B4EE8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {link}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          type="primary"
          style={{
            backgroundColor: "#5B4EE8",
            borderColor: "#5B4EE8",
            borderRadius: "8px",
            fontSize: "13px",
          }}
        >
          Kontakt
        </Button>

        <Button
          style={{
            borderRadius: "8px",
            fontSize: "13px",
            borderColor: "#d1d5db",
            color: "#1a1a1a",
          }}
        >
          Login
        </Button>

        <Dropdown menu={{ items: deItems }} placement="bottomRight">
          <a
            onClick={(e) => e.preventDefault()}
            style={{ color: "#555", fontSize: "13px", cursor: "pointer" }}
          >
            <Space>
              DE
              <DownOutlined style={{ fontSize: "10px" }} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;