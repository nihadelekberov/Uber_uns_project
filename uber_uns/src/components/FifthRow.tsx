import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd"
import { Typography } from "antd"

const { Title, Paragraph, Text } = Typography;

const FirstRow: React.FC = () => {
    return (
        <div style={{ padding: " 80px", backgroundColor: "#fff" }}>
            <Row align="middle" gutter={[32, 32]} style={{ padding: "0px 60px", color:"#fff" }}>

                <Col xs={24} md={12}>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
                        <img
                            src={encodeURI('/188aeb6f5e52afe6b9ee52ac73e95f0b1ab4f956 (1).jpg')}
                            alt="Decorative"
                            style={{ width: '716px', height: '698px', borderRadius: 20 }}
                        />
                    </div>
                </Col>

                <Col xs={24} md={12}>


                    <Title level={3} style={{ color: "rgba(119, 23, 252, 1)", fontSize: "30px" }}>100% Förderfähig</Title>
                    <Paragraph style={{ fontSize: "50px" }}>Weiterbildung zum </Paragraph>
                    <Paragraph style={{ fontSize: "50px", marginTop: "-60px" }}>Full Stack Developer.</Paragraph>
                    <Text style={{ fontSize: "19px" }}>In nur 8 Monaten zum gefragten Full Stack Developer.
                        Lernen Sie alle relevanten Technologien und werden
                        Sie zum Experten für Frontend und Backend Entwicklung.</Text>
                    <br />

                    <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                        <CheckOutlined style={{ color: "rgba(119, 23, 252, 1)" }} />
                        <div>
                            <Title level={4} style={{ color: "rgba(119, 23, 252, 1)" }}>Mit Projekten aus der Praxis lernen</Title>
                            <Paragraph style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 1)" }}>Reale Anwendungen entwickeln und
                                Berufserfahrung sammeln</Paragraph>
                        </div>

                    </div>


                    <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                        <CheckOutlined style={{ color: "rgba(119, 23, 252, 1)" }} />
                        <div>
                            <Title level={4} style={{ color: "rgba(119, 23, 252, 1)" }}>Zertifikat erhalten</Title>
                            <Paragraph style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 1)" }}>Anerkanntes Zertifikat nach erfolgreichem Abschluss
                                der Weiterbildung erhalten</Paragraph>
                        </div>

                    </div>


                    <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                        <CheckOutlined style={{ color: "rgba(119, 23, 252, 1)" }} />
                        <div>
                            <Title level={4} style={{ color: "rgba(119, 23, 252, 1)" }}>Förderfähigkeit nutzen und kostenlos teilnehmen</Title>
                            <Paragraph style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 1)" }}>100% Förderung durch Bildungsgutschein
                                und QCG möglich</Paragraph>
                        </div>

                    </div>

                    <Button style={{
                        marginTop: "32px",
                        marginBottom: "32px",
                        backgroundColor: "rgba(119, 23, 252, 1)", width: "200px",
                        height: "40px",
                        textAlign: "center"
                    }} type="primary">
                        Jetzt anfragen
                    </Button>
                </Col>




            </Row>
        </div>
    )
}
export default FirstRow 