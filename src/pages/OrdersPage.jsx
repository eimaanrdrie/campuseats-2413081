import useCart from '../hooks/useCart'

export default function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return (
      <section className="card">
        <h2 className="section-title">Your Orders</h2>
        <p>You have not placed any orders yet.</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-title">Your Orders</h2>

      <ul className="order-list">
        {orders.map((order) => (
          <li className="card" key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Name: {order.name}</p>
            <p>Mahallah: {order.mahallah}</p>
            <p>Pickup time: {order.pickupTime}</p>
            <p>Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}