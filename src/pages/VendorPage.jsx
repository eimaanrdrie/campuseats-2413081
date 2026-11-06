import { useParams } from 'react-router'
import MenuList from '../components/MenuList'
import { ErrorMessage, Loading } from '../components/Status'
import useVendors from '../hooks/useVendors'

export default function VendorPage() {
  const { id } = useParams()
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

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <MenuList items={vendor.menu} />
    </section>
  )
}