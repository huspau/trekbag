export default function ItemList({items}) {
  
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}

function Item({ name, packed }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} />
        {name}
      </label>
      <button>❌</button>
    </li>
  );
}
