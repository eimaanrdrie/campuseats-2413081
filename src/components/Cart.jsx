function Cart({ lines, onChangeQty, onRemove }) {
  if (lines.length === 0) {
    return <p className="muted">Your cart is empty.</p>
  }

  return (
    <section>
      <h2 className="section-title">Your Cart</h2>

      {lines.map(({ item, qty }) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>RM {item.price.toFixed(2)}</p>

          <div>
            <button
              type="button"
              onClick={() => onChangeQty(item.id, -1)}
            >
              −
            </button>

            <span> Quantity: {qty} </span>

            <button
              type="button"
              onClick={() => onChangeQty(item.id, 1)}
            >
              +
            </button>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Cart