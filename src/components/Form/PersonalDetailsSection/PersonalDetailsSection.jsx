import "./PersonalDetailsSection.css";

export function PersonalDetailsSection() {
  return (
    <section className="input-group personal-details-form">
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
  );
}
