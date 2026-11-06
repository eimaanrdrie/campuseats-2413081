import useCart from '../hooks/useCart'

export default function MenuList({
  items,
  activeCategory,
  onCategoryChange
}) {
  const { addToCart } = useCart()

  const categories = ['All', ...new Set(items.map((item) => item.category))]

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <>
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? 'category-button active'
                : 'category-button'
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {filteredItems.map((item) => (
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
    </>
  )
}