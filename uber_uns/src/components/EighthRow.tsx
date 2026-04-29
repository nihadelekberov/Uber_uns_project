import React from "react";
import { Typography, Collapse } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const EighthRow: React.FC = () => {
    return (
        <div style={{ padding: "100px", backgroundColor: "#fff" }}>
            <div style={{ marginBottom: "40px" }}>
                <Title level={2} style={{
                    textAlign: "center", color: "rgba(0, 0, 0, 1)",
                    fontWeight: 500, fontSize: "55px"
                }}>FAQs - Häufig gestellte Fragen</Title>
            </div>

            
            <div style={{  margin: '0 auto', backgroundColor:"#fff" }}>
                <Collapse accordion bordered={false} defaultActiveKey={['1']} 
                style={{backgroundColor:"#fff"}}
                expandIconPlacement="end">
                    <Panel header="Was ist ein Bildungsgutschein?" key="1">
                        <Paragraph>
                            Ein Bildungsgutschein ist ein Förderinstrument der Agentur für Arbeit bzw. des Jobcenters,
                            mit dem bestimmte berufliche Weiterbildungen unterstützt werden. Er kann die Kurskosten
                            ganz oder teilweise übernehmen, wenn die Weiterbildung als förderfähig anerkannt ist.
                        </Paragraph>
                    </Panel>

                    <Panel header="In welcher Sprache findet die Weiterbildung statt?" key="2">
                        <Paragraph>
                            Um dir ein optimales Lernerlebnis zu bieten,
                            findet unsere Weiterbildung sowohl auf Deutsch als auch auf Englisch statt.
                            Die Lernmaterialien sind entweder
                            auf Englisch oder zweisprachig (Deutsch/Englisch) verfügbar.
                        </Paragraph>
                    </Panel>

                    <Panel header="Brauche ich Vorkenntnisse, um an der Weiterbildung teilzunehmen?" key="3">
                        <Paragraph>
                            Nein! Unsere Kurse sind so aufgebaut,
                            dass du auch ohne Vorkenntnisse erfolgreich durchstarten kannst.
                            Alles, was du brauchst, ist Motivation, Lernbereitschaft
                            und eine stabile Internetverbindung.
                        </Paragraph>
                    </Panel>
                    <Panel header="Welche Zertifikate erhalte ich am Ende meiner Weiterbildung?" key="4">
                        <Paragraph>
                           Du bekommst ein fälschungssicheres, digitales Teilnahmezertifikat mit allen Kursinhalten.
                            Unsere Weiterbildungen sind AZAV-zertifiziert und damit offiziell anerkannt.
                        </Paragraph>
                    </Panel>

                    <Panel header="Welche beruflichen Perspektiven eröffnen sich nach der Weiterbildung?" key="5">
                        <Paragraph>
                           Typische Einstiegspositionen sind Junior Full-Stack Developer, 
                           Frontend- oder Backend-Developer, Web Engineer oder IT-Projektassistent.
                            Diese Positionen gehören zu den gefragten
                            Rollen auf dem deutschen Arbeitsmarkt
                             und bieten Einstiegsgehälter ab etwa 50.000 € brutto pro Jahr.
                        </Paragraph>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default EighthRow;