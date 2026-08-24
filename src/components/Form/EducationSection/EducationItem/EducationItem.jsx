import "./EducationItem.css";
import { SquarePen, Trash2 } from "lucide-react";

const initialEducationState = {
  id: "",
  school: "",
  degree: "",
  eduStartDate: "",
  eduEndDate: "",
};

export function EducationItem({ data, setCvData, setEducationItemData, setIsEditing }) {
  const handleDelete = () => {
    setCvData((prevState) => ({
      ...prevState,
      education: [...prevState.education].filter((item) => item.id !== data.id),
    }));

    setIsEditing(false);
    setEducationItemData(initialEducationState);
  };

  const handleEdit = () => {
    setEducationItemData((prevState) => ({ ...prevState, ...data }));
    setIsEditing(true);
  };

  return (
    <div className="education-item">
      <div className="edu-item-container">
        <div className="edu-item-details">
          <p>{data.school}</p>
          <p>{data.degree}</p>
        </div>
        <div>
          <p>
            {data.eduStartDate} — {data.eduEndDate}
          </p>
        </div>
      </div>
      <div className="edu-item-buttons">
        <button type="button" onClick={handleEdit} className="edu-item-button">
          <SquarePen />
        </button>
        <button type="button" onClick={handleDelete} className="edu-item-button">
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
