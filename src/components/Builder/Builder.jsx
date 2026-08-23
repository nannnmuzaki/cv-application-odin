import "./Builder.css";
import { Form } from "../Form/Form";
import { Preview } from "../Preview/Preview";

export function Builder() {
  return (
    <div className="builder-container">
      <Form />
      <Preview />
    </div>
  );
}
