import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const SixthRow: React.FC = () => {
    const pictures = [
        "494ea3d92f1cd6b5fc3e0b292c23c307645b43bb.png",
        "e2f585cf588624bb2c217a64a0e7247bfbd175eb (1).png",
        "d8da8039ecc919702032878c9a9fde58c0260cae (1).png",
        "Vector.png",
        "4449fa7fac92e1b16691b98806f13a7af43a2be6 (1).png",
    ];

    return (
        <div style={{ backgroundColor: "rgba(251, 251, 251, 1)", padding: "0px 100px" }}>
            <div style={{ backgroundColor: "rgba(251, 251, 251, 1)", padding: "0px 60px", borderRadius: "16px" }}>
                <div style={{marginBottom:"30px"}}>
                <Text style={{ fontSize: "24px" }}>Zertifikate und Kooperationen der GBE gGmbH</Text>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "24px" ,marginBottom:"20px"}}>
                    {pictures.map((name, idx) => (
                        <div
                            key={idx}
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={encodeURI(`/${name}`)}
                                alt={`picture-${idx}`}
                                style={{ maxHeight: 80, width: "100%", objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
};

export default SixthRow;