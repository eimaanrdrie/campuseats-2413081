import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="card">
      <h2>Page not found</h2>
      <p>
        <Link to="/">Return to vendors</Link>
      </p>
    </section>
  )
}