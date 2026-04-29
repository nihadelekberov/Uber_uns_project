
import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const NinethRow: React.FC = () => {
  return (
    <footer>

    
      <div style={{
        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
        padding: "60px 40px",
      }}>

        <div style={{ display: "flex", gap: "40px" }}>

      
          <div style={{ flex: 2 , marginLeft:"80px"}}>
            <Title level={4} style={{ color: "#fff", marginBottom: "24px" }}>
              Gesellschaft für Internationale Bildung und Entwicklungshilfe gGmbH (GBE)
            </Title>
            <img
              src="/93cc89bbe8ff39d2c7ebc4106a2457f268dbe27c.png"
              alt="TÜV"
              style={{ height: "130px",fontWeight:"274px" }}
            />
          </div>

       
          <div style={{ flex: 1 }}>
            <Title level={5} style={{ color: "#fff", marginBottom: "16px" }}>Unternehmen</Title>
            <ul style={{ listStyle: "none" }}>
              {["Über uns", "Leitbild", "Projekte", "Zertifizierung", "Karriere"].map((item) => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", cursor: "pointer" }}>{item}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <Title level={5} style={{ color: "#fff", marginBottom: "16px" }}>Weiterbildung</Title>
             <ul style={{ listStyle: "none" }}>
              {["Full Stack Developer", "Für Unternehmen", "Förderung", "Bildungsgutschein", "COG"].map((item) => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", cursor: "pointer" }}>{item}</Text>
                </li>
              ))}
            </ul>
          </div>

          
          <div style={{ flex: 1 }}>
            <Title level={5} style={{ color: "#fff", marginBottom: "16px" }}>Recht</Title>
            <ul style={{ listStyle: "none" }}>
              {["Impressum", "Datenschutz", "Cookie-Richtlinie"].map((item) => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", cursor: "pointer" }}>{item}</Text>
                </li>
              ))}
            </ul>
            <Title level={5} style={{ color: "#fff", marginBottom: "16px" }}>Kontakt</Title>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", display: "block", marginBottom: "6px" }}>kontakt@gbe-ggmbh.de</Text>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>03641 27 17 530</Text>
          </div>

        </div>
      </div>

     
      <div style={{
        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
          © 2026 Gesellschaft für Internationale Bildung und Entwicklungshilfe gGmbH (GBE). Alle Rechte vorbehalten.
        </Text>
        <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
          Zertifiziert nach AZAV Trägerzulassung
        </Text>
      </div>

    </footer>
  );
};

export default NinethRow;