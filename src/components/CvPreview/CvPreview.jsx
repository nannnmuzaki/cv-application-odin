import "./CvPreview.css";

export function CvPreview({ cvData = {} }) {
  const { personalDetails = {}, education = [], experience = [] } = cvData;

  return (
    <div className="cv-preview" id="cv-preview">
      <header className="cv-header">
        <h1 className="cv-name">{personalDetails.fullName || "Your Name"}</h1>
        <div className="cv-contact-info">
          {personalDetails.email && (
            <span className="contact-item">{"• " + personalDetails.email}</span>
          )}
          {personalDetails.phone && (
            <span className="contact-item">{"• " + personalDetails.phone}</span>
          )}
          {personalDetails.address && (
            <span className="contact-item">{"• " + personalDetails.address}</span>
          )}
          {personalDetails.linkedin && (
            <span className="contact-item">{"• " + personalDetails.linkedin}</span>
          )}
        </div>
      </header>

      {education.length > 0 && (
        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          {education.map((item) => (
            <div key={item.id} className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-left">
                  <p className="cv-institution">{item.school}</p>
                  {item.degree && <p className="cv-subhead">{item.degree}</p>}
                </div>
                <div className="cv-entry-right">
                  <p className="cv-dates">
                    {item.eduStartDate}
                    {item.eduStartDate && item.eduEndDate ? " – " : ""}
                    {item.eduEndDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {experience.length > 0 && (
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Experience</h2>
          {experience.map((item) => (
            <div key={item.id} className="cv-entry">
              <div className="cv-entry-header">
                <div className="cv-entry-left">
                  <p className="cv-institution">{item.companyName}</p>
                  {item.positionTitle && <p className="cv-subhead">{item.positionTitle}</p>}
                </div>
                <div className="cv-entry-right">
                  <p className="cv-dates">
                    {item.expStartDate}
                    {item.expStartDate && item.expEndDate ? " – " : ""}
                    {item.expEndDate}
                  </p>
                  {item.companyLocation && <p className="cv-location">{item.companyLocation}</p>}
                </div>
              </div>
              {item.expDescription && <p className="cv-description">{item.expDescription}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
