function Header({ cartCount, onShowMenu, onShowCart }) {
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>

      <nav className="nav">
        <button type="button" onClick={onShowMenu}>
          Vendors
        </button>

        <button type="button" className="cart" onClick={onShowCart}>
          Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  )
}

export default Header