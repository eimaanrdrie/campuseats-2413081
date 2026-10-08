
function MenuItemCard({ item }) {
  return (
    <div className="menu-item-card">
      <p>{item.category}</p>

      <h3>{item.name}</h3>

      <p>{item.description}</p>

      <p>RM {item.price.toFixed(2)}</p>

      <button disabled={!item.available}>
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;
