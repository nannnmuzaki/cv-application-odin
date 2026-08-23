import "./Form.css";

export function Form() {
  return (
    <section className="cv-form">
      <h2>Form</h2>
      <section className="input-group">
        <h3>Personal Details</h3>
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" name="full-name" placeholder="Enter full name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" />
        <label htmlFor="linkedin">LinkedIn</label>
        <input type="text" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Enter Address" />
      </section>
      <section className="input-group">
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
              name="edu-start-date"
              placeholder="Enter start date"
            />
          </div>
          <div>
            <label htmlFor="edu-end-date">End Date</label>
            <input type="text" id="edu-end-date" name="edu-end-date" placeholder="Enter end date" />
          </div>
        </div>
        <button type="button">Add Education</button>
      </section>
      <section className="input-group">
        <h3>Experience</h3>
        <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          placeholder="Enter company / institution name"
        />
        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          name="position title"
          placeholder="Enter position title"
        />
        <div className="date-container">
          <div>
            <label htmlFor="exp-start-date">Start Date</label>
            <input
              type="text"
              id="exp-start-date"
              name="exp-start-date"
              placeholder="Enter start date"
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date</label>
            <input type="text" id="exp-end-date" name="exp-end-date" placeholder="Enter end date" />
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
        <textarea id="exp-description" name="exp-description" placeholder="Enter description" />
        <button type="button">Add Experience</button>
      </section>
    </section>
  );
}
