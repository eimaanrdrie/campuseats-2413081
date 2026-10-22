import CartItem from './CartItem.jsx'
import CheckoutForm from './CheckoutForm.jsx'

function CartPage({ cart, onChangeQty, onRemove, onPlaceOrder }) {
  if (cart.length === 0) {
    return (
      <section className="card">
        <h2 className="section-title">Your Cart</h2>
        <p>Your cart is empty. Pick something from a menu first.</p>
      </section>
    )
  }

  // B4: derived from cart lines, never stored in state.
  const total = cart.reduce(
    (sum, line) => sum + line.item.price * line.qty,
    0
  )

  return (
    <section className="cart-layout">
      <div className="card">
        <h2 className="section-title">Your Cart</h2>

        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={onChangeQty}
              onRemove={onRemove}
            />
          ))}
        </ul>

        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>

      <aside className="card">
        <CheckoutForm onPlaceOrder={onPlaceOrder} />
      </aside>
    </section>
  )
}

export default CartPage