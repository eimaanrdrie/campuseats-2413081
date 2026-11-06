import { Link, NavLink } from 'react-router'
import useCart from '../hooks/useCart'

function navClass({ isActive }) {
  return isActive ? 'active' : undefined
}

export default function Header() {
  const { count } = useCart()

  return (
    <header className="header">
      <h1 className="logo">
        <Link className="logo-link" to="/">
          CampusEats
        </Link>
      </h1>

      <nav className="nav">
        <NavLink className={navClass} end to="/">
          Vendors
        </NavLink>

        <NavLink className={navClass} to="/cart">
          Cart <span className="badge">{count}</span>
        </NavLink>

        <NavLink className={navClass} to="/orders">
          Orders
        </NavLink>
      </nav>
    </header>
  )
}