// Grey placeholder cards shown while vendor data is loading.
export function Loading() {
  return (
    <div
      className="skeleton-grid"
      role="status"
      aria-label="Loading menus"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-line title" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  )
}

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="card error" role="alert">
      <p>Could not load menus: {message}</p>

      <button className="btn" type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  )
}