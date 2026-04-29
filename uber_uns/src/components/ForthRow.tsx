import { AimOutlined, CheckOutlined, ClockCircleOutlined, RiseOutlined, SafetyOutlined, TrophyOutlined,ThunderboltOutlined, ArrowRightOutlined, StarOutlined} from "@ant-design/icons";
import  { Row ,Col, Card} from "antd"
import {Typography} from "antd"


const { Title ,Text} = Typography
const { Paragraph } = Typography

const ForthRow:React.FC = () => {

return(
    <div style={{backgroundColor:"rgba(239, 246, 255, 1) rgba(255, 255, 255, 1) rgba(248, 245, 255, 1)"
    ,padding:"60px 60px" ,}}>
      <Title level={2} style={{textAlign:"center"}}>Ihr Bildungsgutschein.</Title>
      <Paragraph style={{textAlign:"center",color:"#555"}}>Weiterbildung zum Full Stack Developer - zu 100% staatlich gefördert.</Paragraph>
        

       <Row gutter={[16, 16]} align="stretch">

        <Col xs={24} sm={24} md={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              borderRadius: "16px",
              border: "none",
              height: "100%",
            }}
           
          >
            <div style={{
              width: "44px", height: "44px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "20px",
            }}>
              <TrophyOutlined style={{ color: "#fff", fontSize: "20px" }} />
            </div>
 
            <Title level={3} style={{ color: "#fff", marginBottom: "10px" }}>
              Was wird gefördert?
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
              Die Agentur für Arbeit übernimmt alle Kosten der Weiterbildung.
            </Text>
 
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
              {["Komplette Kursgebühren", "Alle Lernmaterialien", "Prüfungskosten", "Zertifikate"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <CheckOutlined style={{ color: "#fff", fontSize: "13px" }} />
                  <Text style={{ color: "#fff", fontSize: "14px" }}>{item}</Text>
                </li>
              ))}
            </ul>
 
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", marginTop: "auto", paddingTop: "20px" }}>
              <Title level={3} style={{ color: "#fff", marginBottom: "4px" }}>Kostenfrei</Title>
              <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>0€ Eigenanteil notwendig</Text>
            </div>
          </Card>
        </Col>
 
        <Col xs={24} sm={24} md={16}>
          <Row gutter={[16, 16]}>
 
            <Col xs={24} sm={12} md={12}>
              <Card style={{ borderRadius: "16px", border: "1px solid #e5e7eb", height: "100%" }} bodyStyle={{ padding: "24px" }}>
                <div style={{
                  width: "40px", height: "40px", backgroundColor: "#f0fdf4",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "16px",
                }}>
                  <RiseOutlined style={{ color: "#16a34a", fontSize: "18px" }} />
                </div>
                <Title level={2} style={{ fontSize: "40px", fontWeight: 700, marginBottom: "4px" }}>100%</Title>
                <Text style={{ color: "#555", fontSize: "14px" }}>Staatliche Kostenübernahme</Text>
                <div style={{ height: "6px", backgroundColor: "#16a34a", borderRadius: "4px", marginTop: "12px", width: "70%" }} />
              </Card>
            </Col>
 
            <Col xs={24} sm={12} md={12}>
              <Card style={{ borderRadius: "16px", border: "1px solid #e5e7eb", height: "100%" }} bodyStyle={{ padding: "24px" }}>
                <div style={{
                  width: "40px", height: "40px", backgroundColor: "#f5f3ff",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "16px",
                }}>
                  <ClockCircleOutlined style={{ color: "#7C3AED", fontSize: "18px" }} />
                </div>
                <Title level={2} style={{ fontSize: "40px", fontWeight: 700, marginBottom: "4px" }}>2</Title>
                <Text style={{ color: "#555", fontSize: "14px" }}>Monate Gültigkeit</Text>
                <br />
                <Text style={{ color: "#aaa", fontSize: "12px", marginTop: "8px", display: "block" }}>Ab Ausstellung</Text>
              </Card>
            </Col>
 
            <Col xs={24} sm={12} md={12}>
              <Card
                style={{ background: "linear-gradient(135deg, #EC4899, #A855F7)", borderRadius: "16px", border: "none", height: "100%" }}
                bodyStyle={{ padding: "24px" }}
              >
                <div style={{
                  width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "16px",
                }}>
                  <SafetyOutlined style={{ color: "#fff", fontSize: "18px" }} />
                </div>
                <Title level={4} style={{ color: "#fff", marginBottom: "8px" }}>ALG läuft weiter</Title>
                <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>
                  Sie erhalten Ihr Arbeitslosengeld I/II während der gesamten Weiterbildung.
                </Text>
              </Card>
            </Col>
 
            <Col xs={24} sm={12} md={12}>
              <Card style={{ borderRadius: "16px", border: "1px solid #e5e7eb", height: "100%" }} bodyStyle={{ padding: "24px" }}>
                <div style={{
                  width: "40px", height: "40px", backgroundColor: "#f5f3ff",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "16px",
                }}>
                  <AimOutlined style={{ color: "#7C3AED", fontSize: "18px" }} />
                </div>
                <Title level={4} style={{ marginBottom: "8px" }}>AZAV-zertifiziert</Title>
                <Text style={{ color: "#666", fontSize: "13px" }}>Staatlich anerkannt mit höchsten Qualitätsstandards.</Text>
              </Card>
            </Col>
 
          </Row>
        </Col>
      </Row>
 
      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
 
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", borderRadius: "16px",
             border: "none", height: "100%" }}>
            <div style={{
              width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "10px", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "16px",
            }}>
              <ThunderboltOutlined style={{ color: "#fff", fontSize: "18px" }} />
            </div>
            <Title level={4} style={{ color: "#fff", marginBottom: "8px" }}>Voraussetzungen</Title>
            <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>
              Für den Bildungsgutschein gelten bestimmte Voraussetzungen.
            </Text>
            <div style={{ marginTop: "20px" }}>
              <Text style={{ color: "#fff", fontSize: "13px", cursor: "pointer" }}>
                Mehr erfahren <ArrowRightOutlined />
              </Text>
            </div>
          </Card>
        </Col>

 
        <Col xs={24} sm={12} md={8}>
          <Card style={{ borderRadius: "16px", border: "1px solid #e5e7eb", height: "100%" }} >
            <div style={{
              width: "40px", height: "40px", backgroundColor: "#f5f3ff",
              borderRadius: "10px", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "16px",
            }}>
              <StarOutlined style={{ color: "#7C3AED", fontSize: "18px" }} />
            </div>
            <Title level={4} style={{ marginBottom: "8px" }}>Keine Nachzahlung</Title>
            <Text style={{ color: "#666", fontSize: "13px" }}>
              Auch bei schnellem Jobeinstieg oder Abbruch müssen Sie nichts zurückzahlen!
            </Text>
          </Card>
        </Col>
 
        <Col xs={24} sm={24} md={8}>
          <Card
            style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)",
             borderRadius: "16px", border: "none", height: "100%" }}>
            <div style={{
              width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "10px", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "16px",
            }}>
              <AimOutlined style={{ color: "#fff", fontSize: "18px" }} />
            </div>
            <Title level={4} style={{ color: "#fff", marginBottom: "8px" }}>Kostenfreie Vorbereitung sichern</Title>
            <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>
              Erhalten Sie eine kostenlose Beratung und alle Unterlagen für Ihr Gespräch mit der Agentur für Arbeit.
            </Text>
            <div style={{ marginTop: "20px" }}>
              <Text style={{ color: "#fff", fontSize: "13px", cursor: "pointer" }}>
                Jetzt Termin vereinbaren <ArrowRightOutlined />
              </Text>
            </div>
          </Card>
        </Col>
 
      </Row>

    </div>
)};
export default ForthRow;


