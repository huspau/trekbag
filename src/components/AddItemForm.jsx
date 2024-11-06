import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      name: itemText,
      packed: false,
      id: new Date().getTime(),
    };
    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button className="btn">Add to list</Button>
    </form>
  );
}
