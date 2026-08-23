import { Fragment } from "react/jsx-runtime";
import "./Preview.css";

export function Preview({ cvData }) {
  return (
    <section className="cv-preview">
      <h2>Preview</h2>
      <div className="">{cvData.personalDetails.fullName}</div>
      <div className="">{cvData.personalDetails.email}</div>
      <div className="">{cvData.personalDetails.linkedin}</div>
      <div className="">{cvData.personalDetails.address}</div>

      {cvData.education.length > 0 &&
        cvData.education.map((item) => (
          <Fragment key={item.id}>
            <div className="">{item.school}</div>
            <div className="">{item.degree}</div>
            <div className="">{item.eduStartDate}</div>
            <div className="">{item.eduEndDate}</div>
          </Fragment>
        ))}
    </section>
  );
}
