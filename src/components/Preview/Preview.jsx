import "./Preview.css";

export function Preview({ cvData }) {
  return (
    <section className="cv-preview">
      <h2>Preview</h2>
      <div className="">{cvData.personalDetails.fullName}</div>
      <div className="">{cvData.personalDetails.email}</div>
      <div className="">{cvData.personalDetails.linkedin}</div>
      <div className="">{cvData.personalDetails.address}</div>
    </section>
  );
}
