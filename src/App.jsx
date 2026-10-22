import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [cart, setCart] = useState([])
  const [view, setView] = useState('menu')
  const [lastOrder, setLastOrder] = useState(null)

  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId
  )

  const cartCount = cart.reduce(
    (total, line) => total + line.qty,
    0
  )

  useEffect(() => {
    const controller = new AbortController()

    // Show the skeleton immediately, including when Try again is clicked.
    setLoading(true)
    setError(null)

    async function loadVendors() {
      try {
        const res = await fetch('/api/vendors.json', {
          signal: controller.signal
        })

        if (!res.ok) {
          throw new Error('Unable to load vendors.')
        }

        const data = await res.json()

        setVendors(data)
        setSelectedVendorId(data[0]?.id ?? null)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    // Stretch task: delay the request so the skeleton can be seen.
    const timeoutId = setTimeout(loadVendors, 600)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [reloadKey])

  function handleAddToCart(item) {
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

  function handleChangeQty(itemId, delta) {
    setCart((previousCart) =>
      previousCart.flatMap((line) => {
        if (line.item.id !== itemId) {
          return [line]
        }

        const newQty = line.qty + delta

        return newQty > 0 ? [{ ...line, qty: newQty }] : []
      })
    )
  }

  function handleRemove(itemId) {
    setCart((previousCart) =>
      previousCart.filter((line) => line.item.id !== itemId)
    )
  }

  function handlePlaceOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0
    )

    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  let content

  if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done') {
    content = (
      <section className="card">
        <h2>Order placed.</h2>
        <p>Pickup time: {lastOrder?.pickupTime}</p>
        <p>Total: RM {lastOrder?.total.toFixed(2)}</p>
      </section>
    )
  } else if (loading) {
    content = <Loading />
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((key) => key + 1)}
      />
    )
  } else {
    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>

          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">
            Menu: {selectedVendor.name}
          </h2>

          <MenuList
            items={selectedVendor.menu}
            onAdd={handleAddToCart}
          />
        </section>
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />

      <main className="container">{content}</main>

      <Footer />
    </>
  )
}

export default App