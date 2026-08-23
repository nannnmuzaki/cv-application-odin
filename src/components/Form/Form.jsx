import "./Form.css";

export function Form() {
  return (
    <section class="cv-form">
      <h2>Form</h2>
      <section class="input-group">
        <h3>Personal Details</h3>
        <label for="full-name">Full Name</label>
        <input type="text" id="full-name" name="full-name" placeholder="Enter full name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" />
        <label for="linkedin">LinkedIn</label>
        <input type="text" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL" />
        <label for="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Enter Address" />
      </section>
      <section class="input-group">
        <h3>Education</h3>
        <label for="school">School</label>
        <input type="text" id="school" name="school" placeholder="Enter school / university" />
        <label for="degree">Degree</label>
        <input type="text" id="degree" name="degree" placeholder="Enter degree / field of study" />
        <div class="date-container">
          <div>
            <label for="start-date">Start Date</label>
            <input
              type="text"
              id="edu-start-date"
              name="edu-start-date"
              placeholder="Enter start date"
            />
          </div>
          <div>
            <label for="edu-end-date">End Date</label>
            <input type="text" id="edu-end-date" name="edu-end-date" placeholder="Enter end date" />
          </div>
        </div>
        <button type="button">Add Education</button>
      </section>
      <section class="input-group">
        <h3>Experience</h3>
        <label for="company-name">Company Name</label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          placeholder="Enter company / institution name"
        />
        <label for="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          name="position title"
          placeholder="Enter position title"
        />
        <div class="date-container">
          <div>
            <label for="exp-start-date">Start Date</label>
            <input
              type="text"
              id="exp-start-date"
              name="exp-start-date"
              placeholder="Enter start date"
            />
          </div>
          <div>
            <label for="end-date">End Date</label>
            <input type="text" id="exp-end-date" name="exp-end-date" placeholder="Enter end date" />
          </div>
        </div>
        <label for="company-location">Location</label>
        <input
          type="text"
          id="company-location"
          name="company-location"
          placeholder="Enter location"
        />
        <label for="exp-description">Description</label>
        <textarea id="exp-description" name="exp-description" placeholder="Enter description" />
        <button type="button">Add Experience</button>
      </section>
    </section>
  );
}
