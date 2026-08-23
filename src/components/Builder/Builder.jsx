import "./Builder.css";
import { Form } from "../Form/Form";
import { Result } from "../Result/Result";

export function Builder() {
  return (
    <div class="builder-container">
      <Form />
      <Result />
    </div>
  );
}
