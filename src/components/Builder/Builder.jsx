import "./Builder.css";
import { Form } from "../Form/Form";
import { Preview } from "../Preview/Preview";
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
      <Preview cvData={cvData} />
    </div>
  );
}
