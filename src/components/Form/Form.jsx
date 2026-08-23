import { EducationSection } from "./EducationSection/EducationSection";
import { ExperienceSection } from "./ExperienceSection/ExperienceForm";
import { PersonalDetailsSection } from "./PersonalDetailsSection/PersonalDetailsSection";
import "./Form.css";

export function Form() {
  return (
    <section className="cv-form">
      <h2>Form</h2>
      <form>
        <PersonalDetailsSection />
        <EducationSection />
        <ExperienceSection />
      </form>
    </section>
  );
}
