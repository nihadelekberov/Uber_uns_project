import { Row,Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Paragraph } = Typography;  
const { Text } = Typography;

const SecondRow: React.FC = () => {
  return (
    <div style={{ padding: "60px ", backgroundColor: "#fff" }}>
      <Row gutter={32} align="middle">

        <Col xs={24} md={12} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "60px 60px" }}>
       <Title level={2} style={{ color: "#3b1fa0" , marginBottom:"0px"}}>
          Zertifizierte Qualität
        </Title>
        <Title level={2} style={{width:"513px", 
            color:"rgba(119, 23, 252, 1)", marginBottom:"16px", marginTop:"-8px"}}>Made in Germany
        </Title>

        <Paragraph style={{ color: "#555", marginBottom: "24px"}}>
            Als gemeinnütziger Träger 
            unterstützen wir die Integration in den Arbeitsmarkt und fördern die 
            Beschäftigungsfähigkeit durch praxisnahe Projekte. 
             Wir setzen Projekte auf nationaler und internationaler
             Ebene um und kooperieren dabei eng mit 
            Unternehmen und öffentlichen Institutionen.
        </Paragraph>

<Text  style={{ color: "rgba(119, 23, 252, 1)" , cursor:"pointer"}}>
Zertifizierung der GBE gGmbH
</Text>

    </div>
    </Col>


    <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={encodeURI('/3b4fa6a88555ab2195b1a8d06f79b20b9b7e663e (1).jpg')}
          alt="Illustration"

          style={{ width: '615px', height: '615px', borderRadius: 40 , flex:"vertical"}}
        />
      </div>
    </Col>
</Row>
    </div>
    )
};

export default SecondRow;  