// One row in the cart. It shows data and reports clicks upward; it owns no state.
function CartItem({ line, onChangeQty, onRemove }) {
  const { item, qty } = line
  const lineTotal = item.price * qty

  return (
    <li className="cart-line">
      <div>
        <p className="cart-name">{item.name}</p>
        <small>RM {item.price.toFixed(2)} each</small>
      </div>

      <div className="qty">
        <button
          type="button"
          onClick={() => onChangeQty(item.id, -1)}
          aria-label={`Remove one ${item.name}`}
        >
          −
        </button>

        <span>{qty}</span>

        <button
          type="button"
          onClick={() => onChangeQty(item.id, 1)}
          aria-label={`Add one ${item.name}`}
        >
          +
        </button>
      </div>

      <p className="line-total">RM {lineTotal.toFixed(2)}</p>

      <button
        type="button"
        className="link danger"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default CartItem