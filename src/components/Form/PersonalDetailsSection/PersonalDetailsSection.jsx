import "./PersonalDetailsSection.css";

export function PersonalDetailsSection({ data, setCvData }) {
  const handleChange = (e) => {
    setCvData((prevState) => {
      return {
        ...prevState,
        personalDetails: {
          ...prevState.personalDetails,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  return (
    <section className="input-group personal-details-form">
      <h3>Personal Details</h3>
      <label htmlFor="full-name">Full Name</label>
      <input
        onChange={handleChange}
        type="text"
        id="full-name"
        name="fullName"
        value={data.fullName}
        placeholder="Enter full name"
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        type="email"
        id="email"
        name="email"
        value={data.email}
        placeholder="Enter email"
      />
      <label htmlFor="linkedin">LinkedIn</label>
      <input
        onChange={handleChange}
        type="text"
        id="linkedin"
        name="linkedin"
        value={data.linkedin}
        placeholder="Enter LinkedIn profile URL"
      />
      <label htmlFor="address">Address</label>
      <input
        onChange={handleChange}
        type="text"
        id="address"
        name="address"
        value={data.address}
        placeholder="Enter Address"
      />
    </section>
  );
}
