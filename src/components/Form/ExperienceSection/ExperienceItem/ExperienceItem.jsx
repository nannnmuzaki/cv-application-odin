import "./ExperienceItem.css";
import { SquarePen, Trash2, MapPinned } from "lucide-react";

const initialExperienceState = {
  id: "",
  companyName: "",
  positionTitle: "",
  expStartDate: "",
  expEndDate: "",
  companyLocation: "",
  expDescription: "",
};

export function ExperienceItem({ data, setCvData, setExperienceItemData, setIsEditing }) {
  const handleDelete = () => {
    setCvData((prevState) => ({
      ...prevState,
      experience: [...prevState.experience].filter((item) => item.id !== data.id),
    }));

    setIsEditing(false);
    setExperienceItemData(initialExperienceState);
  };

  const handleEdit = () => {
    setExperienceItemData((prevState) => ({ ...prevState, ...data }));
    setIsEditing(true);
  };

  return (
    <div className="experience-item">
      <div className="exp-item-container">
        <div className="exp-item-details-top">
          <div>
            <p>{data.companyName}</p>
            <p>{data.positionTitle}</p>
          </div>
          <div>
            <p>
              {data.expStartDate} — {data.expEndDate}
            </p>
            <span>
              <MapPinned />
              <p>{data.companyLocation}</p>
            </span>
          </div>
        </div>
        <div className="exp-item-details-bottom">
          <p>
            {data.expDescription.length > 140
              ? data.expDescription.slice(0, 140) + "..."
              : data.expDescription}
          </p>
        </div>
      </div>
      <div className="exp-item-buttons">
        <button type="button" onClick={handleEdit} className="exp-item-button">
          <SquarePen />
        </button>
        <button type="button" onClick={handleDelete} className="exp-item-button">
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
