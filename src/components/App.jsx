import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: false })));
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header items={items} />
        <ItemList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
