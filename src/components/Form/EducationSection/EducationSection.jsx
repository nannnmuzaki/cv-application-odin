export function EducationSection() {
  return (
    <section className="input-group education-section">
      <h3>Education</h3>
      <label htmlFor="school">School</label>
      <input type="text" id="school" name="school" placeholder="Enter school / university" />
      <label htmlFor="degree">Degree</label>
      <input type="text" id="degree" name="degree" placeholder="Enter degree / field of study" />
      <div className="date-container">
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="edu-start-date"
            name="eduStartDate"
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="edu-end-date">End Date</label>
          <input type="text" id="edu-end-date" name="eduEndDate" placeholder="Enter end date" />
        </div>
      </div>
      <button type="button">Add Education</button>
    </section>
  );
}
