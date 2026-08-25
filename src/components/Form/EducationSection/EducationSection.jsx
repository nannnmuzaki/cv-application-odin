import "./EducationSection.css";
import { useState } from "react";
import { EducationItem } from "./EducationItem/EducationItem";

const initialEducationState = {
  id: "",
  school: "",
  degree: "",
  eduStartDate: "",
  eduEndDate: "",
};

export function EducationSection({ data, setCvData }) {
  const [educationItemData, setEducationItemData] = useState(initialEducationState);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setEducationItemData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    setCvData((prevState) => {
      return {
        ...prevState,
        education: [...prevState.education, { ...educationItemData, id: crypto.randomUUID() }],
      };
    });

    setEducationItemData(initialEducationState);
  };

  const handleUpdateClick = () => {
    setCvData((prevState) => {
      return {
        ...prevState,
        education: prevState.education.map((item) =>
          item.id === educationItemData.id ? { ...item, ...educationItemData } : item,
        ),
      };
    });

    setIsEditing(false);
    setEducationItemData(initialEducationState);
  };

  const handleCancelEdit = () => {
    setEducationItemData(initialEducationState);
    setIsEditing(false);
  };

  return (
    <section className="input-group education-section">
      <h3>Education</h3>
      {data.length > 0 && (
        <div className="education-items-list">
          {data.map((item) => (
            <EducationItem
              key={item.id}
              data={item}
              setCvData={setCvData}
              setEducationItemData={setEducationItemData}
              setIsEditing={setIsEditing}
            />
          ))}
        </div>
      )}
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        onChange={handleChange}
        value={educationItemData.school}
        placeholder="Enter school / university"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        onChange={handleChange}
        value={educationItemData.degree}
        placeholder="Enter degree / field of study"
      />
      <div className="date-container">
        <div>
          <label htmlFor="edu-start-date">Start Date</label>
          <input
            type="text"
            id="edu-start-date"
            name="eduStartDate"
            onChange={handleChange}
            value={educationItemData.eduStartDate}
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
            value={educationItemData.eduEndDate}
            placeholder="Enter end date"
          />
        </div>
      </div>
      <div className="edu-section-buttons">
        <button type="button" onClick={isEditing ? handleUpdateClick : handleAddClick}>
          {isEditing ? "Update Education" : "Add Education"}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </section>
  );
}
