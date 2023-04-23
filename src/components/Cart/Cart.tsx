interface CartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: CartProps) => {
  return (
    <div>
      <h2>Cart:</h2>
      <ul>
        {cartItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
