import React from "react";
import { Button } from "antd";
import {Typography} from "antd";

const { Title, Paragraph } = Typography;

const SeventhRow: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: "120px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(closest-side at 30% 40%, rgba(255,255,255,0.06), transparent), linear-gradient(135deg,#3b82f6 0%, #7c3aed 50%, #a21caf 100%)",
      color: "white",
    },
    content: {
      maxWidth: 980,
      textAlign: "center",
    },
    kicker: {
      display: "inline-block",
      background: "rgba(255,255,255,0.06)",
      padding: "10px 18px",
      borderRadius: 24,
      fontWeight: 600,
      color: "rgba(255,255,255,0.95)",
      marginBottom: 24,
    },
    title: { color:"white",
      fontSize: 48,
      lineHeight: 1.05,
      margin: "0 0 18px 0",
      fontWeight: 800,
    },
    subtitle: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 18,
      marginBottom: 36,
    },
    btnGroup: {
      display: "flex",
      gap: 20,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: "#ffffff",
      color: "#6b21a8",
      border: "none",
      padding: "14px 30px",
      borderRadius: 12,
      boxShadow: "0 10px 30px rgba(107,33,168,0.18)",
    },
    btnOutline: {
      background: "transparent",
      color: "rgba(255,255,255,0.95)",
      border: "2px solid rgba(255,255,255,0.35)",
      padding: "12px 28px",
      borderRadius: 12,
    },
  };

  return (
    
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.kicker}>🚀 STARTE JETZT</div>
        <Title level={2} style={styles.title}>
          Bereit für den nächsten
          <br />
          Schritt?
        </Title>
        <Paragraph style={styles.subtitle}>
          Vereinbaren Sie jetzt ein kostenfreies Beratungsgespräch und finden Sie
          heraus, wie wir Ihnen helfen können.
        </Paragraph>

        <div style={styles.btnGroup}>
          <Button type="default" size="large" style={styles.btnPrimary}>
            Kostenlose Beratung
          </Button>
          <Button type="default" size="large" style={styles.btnOutline}>
            Weiterbildung ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeventhRow;
