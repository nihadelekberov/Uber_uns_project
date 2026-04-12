import React from "react";
import { Row, Col, Card, Typography, Tag } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const ThirdRow: React.FC = () => {
    return (
        <div style={{ padding: "100px", backgroundColor: "#fff" }}>
           <Title level={2} style={{ color: "black", textAlign: "center" }}>
                Möglichkeiten mit GBE gGmbH.
            </Title>
            <Paragraph  style={{ color: "gray", textAlign: "center",marginTop:"-10px",
                 marginBottom:"40px" }}>
                Wir unterstützen Sie auf Ihrem Weg!
            </Paragraph>

            <Row gutter={[24, 24]} justify="center">

                <Col xs={24} md={12}>
                    <Card style={{ borderRadius: "12px", color: "#rgba(249, 250, 251, 1)" }}>
                        <Tag style={{ color: "#5B4EE8", fontSize: "11px" }}>AZAV-ZERTIFIZIERT</Tag>
                        <Title level={4}>IT-Weiterbildung</Title>
                        <Text>Entdecken Sie Ihre Karriere zum Full Stack Developer in nur 8 Monaten.</Text>
                        <ul style={{ marginTop: "16px", paddingLeft: "0px", listStyle: "none" }}>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />100% Förderung durch Bildungsgutschein und ÖCG</li>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />Modern Stack (React, Node.js, TypeScript)</li>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />Reale Praxisprojekte & Berufserfahrung</li>
                        </ul>
                        <Text style={{ color: "#5B4EE8", marginTop: "16px", display: "block", cursor: "pointer" }}>
                            Mehr erfahren →
                        </Text>
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    <Card style={{ borderRadius: "12px", color: "#rgba(249, 250, 251, 1)" }}>
                        <Tag style={{ color: "#5B4EE8", fontSize: "11px" }}>FÜR UNTERNEHMEN</Tag>
                        <Title level={4}>Personaldienstleistung</Title>
                        <Text>Wir finden die richtigen Talente für Ihr Unternehmen passgenau und zuverlässig.</Text>
                        <ul style={{ marginTop: "16px", paddingLeft: "0px", listStyle: "none" }}>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />
                                Alle Branchen & Berufsfelder
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />Schnelle Besetzung offener Stellen</li>
                            <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <CheckOutlined style={{ color: "#5B4EE8" }} />Qualifizierte Fachkräfte</li>
                        </ul>
                        <Text style={{ color: "#5B4EE8", marginTop: "16px", display: "block", cursor: "pointer" }}>
                            Mehr erfahren →
                        </Text>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default ThirdRow;