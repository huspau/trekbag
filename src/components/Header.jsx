import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ items }) {
  return (
    <header>
      <Logo />
      <Counter
        packedItems={items.filter((item) => item.packed).length}
        total={items.length}
      />
    </header>
  );
}
