import { useParams, useSearchParams } from 'react-router'
import MenuList from '../components/MenuList'
import { ErrorMessage, Loading } from '../components/Status'
import useVendors from '../hooks/useVendors'

export default function VendorPage() {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { vendors, loading, error, reload } = useVendors()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  const vendor = vendors.find((currentVendor) => currentVendor.id === id)

  if (!vendor) {
    return <h2>Vendor not found</h2>
  }

  const categories = ['All', ...new Set(vendor.menu.map((item) => item.category))]
  const requestedCategory = searchParams.get('cat') || 'All'

  const activeCategory = categories.includes(requestedCategory)
    ? requestedCategory
    : 'All'

  function handleCategoryChange(category) {
    const nextSearchParams = new URLSearchParams(searchParams)

    if (category === 'All') {
      nextSearchParams.delete('cat')
    } else {
      nextSearchParams.set('cat', category)
    }

    setSearchParams(nextSearchParams)
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>

      <MenuList
        items={vendor.menu}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
    </section>
  )
}