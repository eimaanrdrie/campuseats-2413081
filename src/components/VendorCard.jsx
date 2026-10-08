function VendorCard() {
    const vendor ={
        name: 'Kafe Mahallah Faruq',
        location: 'Block B',
        openHours: '8:00 AM - 10:00 PM',
        isOpen: true,
    }

    return (
        <article className="card vendor-card">
            <div className="thumb" aria-hidden="true">
                {vendor.name.charAt(0)}
            </div>
            <div>
                <h2>{vendor.name}</h2>
                <p className="muted">{vendor.location}</p>
                <p className="muted">{vendor.openHours}</p>
                <span className={vendor.isOpen ? 'status open' : 'status closed'}>
                    {vendor.isOpen ? 'Open Now' : 'Closed'}
                </span>
            </div>
        </article>
    )
}
export default VendorCard