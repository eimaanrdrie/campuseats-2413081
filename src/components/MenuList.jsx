import useCart from '../hooks/useCart'

export default function MenuList({ items }) {
  const { addToCart } = useCart()

  return (
    <div className="menu-list">
      {items.map((item) => (
        <article className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>RM {item.price.toFixed(2)}</p>

          {item.popular && <p className="popular">Popular</p>}

          <button
            type="button"
            className="btn"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </article>
      ))}
    </div>
  )
}