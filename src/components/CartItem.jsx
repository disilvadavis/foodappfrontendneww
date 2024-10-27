const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    return (
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
        <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    );
  };
  
  export default CartItem;
  