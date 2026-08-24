import "./Builder.css";
import { Form } from "../Form/Form";
import { PreviewSection } from "../PreviewSection/PreviewSection";
import { useState } from "react";

export function Builder() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      linkedin: "",
      address: "",
    },
    education: [],
    experience: [],
  });

  return (
    <div className="builder-container">
      <Form cvData={cvData} setCvData={setCvData} />
      <PreviewSection cvData={cvData} />
    </div>
  );
}
