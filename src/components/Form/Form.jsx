import "./Form.css";

export function Form() {
  return (
    <section class="cv-form">
      <h2>Form</h2>
      <section class="personal-details">
        <h3>Personal Details</h3>
        <label for="full-name">Full Name</label>
        <input type="text" id="full-name" name="full-name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="linkedin">LinkedIn</label>
        <input type="text" id="linkedin" name="linkedin" />
      </section>
    </section>
  );
}
