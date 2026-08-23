import { useState } from "react";

// data will be used to render list of education item
// oxlint-disable-next-line
export function EducationSection({ data, setCvData }) {
  const [educationItem, setEducationItem] = useState({
    school: "",
    degree: "",
    eduStartDate: "",
    eduEndDate: "",
  });

  const handleChange = (e) => {
    setEducationItem((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    const newEducationData = { ...educationItem, id: crypto.randomUUID() };

    setCvData((prevState) => {
      return {
        ...prevState,
        education: [...prevState.education, newEducationData],
      };
    });

    setEducationItem({ school: "", degree: "", eduStartDate: "", eduEndDate: "" });
  };

  return (
    <section className="input-group education-section">
      <h3>Education</h3>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        onChange={handleChange}
        value={educationItem.school}
        placeholder="Enter school / university"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        onChange={handleChange}
        value={educationItem.degree}
        placeholder="Enter degree / field of study"
      />
      <div className="date-container">
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="edu-start-date"
            name="eduStartDate"
            onChange={handleChange}
            value={educationItem.eduStartDate}
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="edu-end-date">End Date</label>
          <input
            type="text"
            id="edu-end-date"
            name="eduEndDate"
            onChange={handleChange}
            value={educationItem.eduEndDate}
            placeholder="Enter end date"
          />
        </div>
      </div>
      <button onClick={handleAddClick} type="button">
        Add Education
      </button>
    </section>
  );
}
