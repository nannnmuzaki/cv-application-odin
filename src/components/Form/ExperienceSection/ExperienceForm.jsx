import "./ExperienceSection.css";

export function ExperienceSection() {
  return (
    <section className="input-group experience-section">
      <h3>Experience</h3>
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        placeholder="Enter company / institution name"
      />
      <label htmlFor="position-title">Position Title</label>
      <input
        type="text"
        id="position-title"
        name="positionTitle"
        placeholder="Enter position title"
      />
      <div className="date-container">
        <div>
          <label htmlFor="exp-start-date">Start Date</label>
          <input
            type="text"
            id="exp-start-date"
            name="expStartDate"
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="exp-end-date">End Date</label>
          <input type="text" id="exp-end-date" name="exPendDate" placeholder="Enter end date" />
        </div>
      </div>
      <label htmlFor="company-location">Location</label>
      <input
        type="text"
        id="company-location"
        name="company-location"
        placeholder="Enter location"
      />
      <label htmlFor="exp-description">Description</label>
      <textarea id="exp-description" name="expDescription" placeholder="Enter description" />
      <button type="button">Add Experience</button>
    </section>
  );
}
