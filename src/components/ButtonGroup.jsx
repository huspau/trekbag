import Button from "./Button";
import { secondaryButtons } from "./lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((label) => (
        <Button key={label} type={"secondary"}>
          {label}
        </Button>
      ))}
    </section>
  );
}
