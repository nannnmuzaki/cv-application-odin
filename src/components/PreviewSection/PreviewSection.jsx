import "./PreviewSection.css";
import { CvPreview } from "../CvPreview/CvPreview";

export function PreviewSection({ cvData }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="preview-section">
      <h2>Preview</h2>
      <div className="cv-container">
        <CvPreview cvData={cvData} />
        <button type="button" className="print-button" onClick={handlePrint}>
          Print/Download CV
        </button>
      </div>
    </section>
  );
}
