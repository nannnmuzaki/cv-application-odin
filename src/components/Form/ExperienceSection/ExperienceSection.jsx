import "./ExperienceSection.css";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import { useState } from "react";

const initialExperienceState = {
  id: "",
  companyName: "",
  positionTitle: "",
  expStartDate: "",
  expEndDate: "",
  companyLocation: "",
  expDescription: "",
};

export function ExperienceSection({ data, setCvData }) {
  const [experienceItemData, setExperienceItemData] = useState(initialExperienceState);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setExperienceItemData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    setCvData((prevState) => {
      return {
        ...prevState,
        experience: [...prevState.experience, { ...experienceItemData, id: crypto.randomUUID() }],
      };
    });

    setExperienceItemData(initialExperienceState);
  };

  const handleUpdateClick = () => {
    setCvData((prevState) => {
      return {
        ...prevState,
        experience: prevState.experience.map((item) =>
          item.id === experienceItemData.id ? { ...item, ...experienceItemData } : item,
        ),
      };
    });

    setIsEditing(false);
    setExperienceItemData(initialExperienceState);
  };

  const handleCancelEdit = () => {
    setExperienceItemData(initialExperienceState);
    setIsEditing(false);
  };

  return (
    <section className="input-group experience-section">
      <h3>Experience</h3>
      {data.length > 0 && (
        <div className="experience-items-list">
          {data.map((item) => (
            <ExperienceItem
              key={item.id}
              data={item}
              setCvData={setCvData}
              setExperienceItemData={setExperienceItemData}
              setIsEditing={setIsEditing}
            />
          ))}
        </div>
      )}
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        value={experienceItemData.companyName}
        onChange={handleChange}
        placeholder="Enter company / institution name"
      />
      <label htmlFor="position-title">Position Title</label>
      <input
        type="text"
        id="position-title"
        name="positionTitle"
        value={experienceItemData.positionTitle}
        onChange={handleChange}
        placeholder="Enter position title"
      />
      <div className="date-container">
        <div>
          <label htmlFor="exp-start-date">Start Date</label>
          <input
            type="text"
            id="exp-start-date"
            name="expStartDate"
            value={experienceItemData.expStartDate}
            onChange={handleChange}
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="exp-end-date">End Date</label>
          <input
            type="text"
            id="exp-end-date"
            name="expEndDate"
            value={experienceItemData.expEndDate}
            onChange={handleChange}
            placeholder="Enter end date"
          />
        </div>
      </div>
      <label htmlFor="company-location">Location</label>
      <input
        type="text"
        id="company-location"
        name="companyLocation"
        value={experienceItemData.companyLocation}
        onChange={handleChange}
        placeholder="Enter location"
      />
      <label htmlFor="exp-description">Description</label>
      <textarea
        id="exp-description"
        name="expDescription"
        value={experienceItemData.expDescription}
        onChange={handleChange}
        placeholder="Enter description"
      />
      <div className="exp-section-buttons">
        <button type="button" onClick={isEditing ? handleUpdateClick : handleAddClick}>
          {isEditing ? "Update Experience" : "Add Experience"}
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
