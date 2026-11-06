import { CartContext } from './cart-context'
import useLocalStorage from '../hooks/useLocalStorage'

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])

  const count = cart.reduce((sum, line) => sum + line.qty, 0)

  const total = cart.reduce(
    (sum, line) => sum + line.item.price * line.qty,
    0
  )

  function addToCart(item) {
    setCart((previousCart) => {
      const existingLine = previousCart.find(
        (line) => line.item.id === item.id
      )

      if (existingLine) {
        return previousCart.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }

      return [...previousCart, { item, qty: 1 }]
    })
  }

  function changeQty(itemId, delta) {
    setCart((previousCart) =>
      previousCart.flatMap((line) => {
        if (line.item.id !== itemId) {
          return [line]
        }

        const qty = line.qty + delta
        return qty > 0 ? [{ ...line, qty }] : []
      })
    )
  }

  function removeFromCart(itemId) {
    setCart((previousCart) =>
      previousCart.filter((line) => line.item.id !== itemId)
    )
  }

  function placeOrder(details) {
    const order = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ...details,
      items: cart,
      total,
      placedAt: new Date().toISOString()
    }

    setOrders((previousOrders) => [order, ...previousOrders])
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        count,
        total,
        addToCart,
        changeQty,
        removeFromCart,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}