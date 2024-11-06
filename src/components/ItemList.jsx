export default function ItemList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          packed={item.packed}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ id, name, packed, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={() => handleToggleItem(id)} />
        {name}
      </label>
      <button
        onClick={() =>
          handleDeleteItem(id)
        }
      >
        ❌
      </button>
    </li>
  );
}
