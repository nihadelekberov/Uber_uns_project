import React from "react";
import { Row, Col, Button, Typography } from "antd";


const { Title, Paragraph, Text } = Typography;

const FirstRow: React.FC = () => {
    return (
        <div
            style={{
                background: "linear-gradient(135deg, #f5f3ff 0%, #ede8ff 50%, #7c3aed 100%)",
                padding: "40px",
                overflow: "hidden",
            }}
        >
            <Row align="middle" gutter={[32, 32]}>

                {/* Sol teref*/}
                <Col xs={24} md={12}>
                    <div style={{ paddingBottom: "60px" }}>

                        <Title
                            level={1}
                            style={{ color: "#3b1fa0", marginBottom: "16px" }}>

                            Bildung als Beginn lebenslanger Netzwerke
                        </Title>

                        <Paragraph
                            style={{ color: "#555", marginBottom: "20px", maxWidth: "380px" }}>

                            Erweitern Sie Ihre Fähigkeiten und eröffnen Sie neue
                            Karrierechancen in der IT-Branche. Dank {""}

                            <Text style={{ color: "#5B4EE8", cursor: "pointer" }}>
                                Bildungsgutschein
                            </Text>{" "}
                            ist Ihre Weiterbildung zu 100% staatlich gefördert.
                        </Paragraph>


                        <Row gutter={24} style={{ marginBottom: "24px" }}>
                            <Col>
                                <Text style={{ color: "#888", display: "block" }}>
                                    Projekte: 5.8
                                </Text>
                                <Text style={{ fontWeight: 600, color: "#333" }}>
                                    Über 500
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{ color: "#888", display: "block" }}>
                                    Erfolgsquote
                                </Text>
                                <Text style={{ fontWeight: 600, color: "#333" }}>
                                    Über 700
                                </Text>
                            </Col>
                        </Row>

                        <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
                            <Button type="primary" size="large" style={{ borderRadius: "8px", padding: " 0px 24px" }}>
                                Jetzt anfragen
                            </Button>

                            <Button size="large" style={{
                                borderRadius: "8px", padding: " 0px 24px",
                                borderColor: "rgba(119, 23, 252, 1)"
                            }}>
                                Über unsere Weiterbildung
                            </Button>
                        </div>

                    </div>
                </Col>

                {/* Sag teref*/}
                <Col xs={24} md={12} style={{ display: "flex", justifyContent: "center" }}>
                    <div>

                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default FirstRow;