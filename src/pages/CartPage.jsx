import { useNavigate } from 'react-router'
import CartItem from '../components/CartItem'
import CheckoutForm from '../components/CheckoutForm'
import useCart from '../hooks/useCart'

export default function CartPage() {
  const {
    cart,
    total,
    changeQty,
    removeFromCart,
    placeOrder
  } = useCart()

  const navigate = useNavigate()

  function handlePlaceOrder(details) {
    placeOrder(details)
    navigate('/orders')
  }

  if (cart.length === 0) {
    return (
      <section className="card">
        <h2 className="section-title">Your Cart</h2>
        <p>Your cart is empty. Pick something from a menu first.</p>
      </section>
    )
  }

  return (
    <section className="cart-layout">
      <div className="card">
        <h2 className="section-title">Your Cart</h2>

        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={changeQty}
              onRemove={removeFromCart}
            />
          ))}
        </ul>

        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>

      <aside className="card">
        <CheckoutForm onPlaceOrder={handlePlaceOrder} />
      </aside>
    </section>
  )
}