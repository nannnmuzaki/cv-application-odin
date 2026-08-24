import { EducationSection } from "./EducationSection/EducationSection";
import { ExperienceSection } from "./ExperienceSection/ExperienceSection";
import { PersonalDetailsSection } from "./PersonalDetailsSection/PersonalDetailsSection";
import "./Form.css";

export function Form({ cvData, setCvData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="cv-form">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <PersonalDetailsSection data={cvData.personalDetails} setCvData={setCvData} />
        <EducationSection data={cvData.education} setCvData={setCvData} />
        <ExperienceSection data={cvData.experience} setCvData={setCvData} />
      </form>
    </section>
  );
}
