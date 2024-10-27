const MenuItem = ({ item, onAddToCart }) => {
    return (
      <div>
        <img src={item.imageUrl} alt={item.name} />
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      </div>
    );
  };
  
  export default MenuItem;
  