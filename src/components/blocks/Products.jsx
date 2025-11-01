export default function Products({ data }) {
  return (
    <div className="featured-products">
      <p className="featured-subtitle">{data.title}</p>
      <h2>{data.heading} <br /><span>{data.highlight}</span></h2>
      <div className="product-grid">
        {data.items?.map((item) => (
          <div
            key={item.title}
            className={`product-card ${item.rotation === 'left' ? 'rotate-left' : item.rotation === 'right' ? 'rotate-right' : 'no-rotate'}`}
          >
            <img src={item.imageUrl} alt={item.title} className={item.cssClass} />
            <h3>{item.title}</h3>
          </div>
        ))}
        {data.cta && <a className="product-btn" href={data.cta.href}>{data.cta.label}</a>}
      </div>
    </div>
  );
}
