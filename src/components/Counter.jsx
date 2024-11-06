export default function Counter({ packedItems, total }) {
  return (
    <p>
      <b>{packedItems}</b> / {total} items packed
    </p>
  );
}
