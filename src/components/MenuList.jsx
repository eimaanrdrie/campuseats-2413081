import { useState } from 'react'

function MenuList({ items, onAdd }) {
  // B6: controlled state for the selected menu category.
  const [activeCategory, setActiveCategory] = useState('All')

  // B6: creates All plus each category found in the current vendor menu.
  const categories = ['All', ...new Set(items.map((item) => item.category))]

  // B6: derived list, not stored in state.
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
            onClick={() => setActiveCategory(category)}
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
              onClick={() => onAdd(item)}
            >
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </>
  )
}

export default MenuList