export default function News({ data }) {
  return (
    <div className="news-updates">
      <div className="news-header">
        <div>
          <p className="news-subtitle">{data.title}</p>
          <h2>{data.heading} <br /><span>{data.highlight}</span></h2>
        </div>
        {data.moreCta && <a className="see-more-btn" href={data.moreCta.href}>{data.moreCta.label}</a>}
      </div>
      <div className="news-grid">
        {data.items?.map((n) => (
          <div className="news-card" key={n.title}>
            <img src={n.imageUrl} alt={n.title} className="news-img" />
            <p className="news-date">{new Date(n.date).toLocaleDateString()}</p>
            <h3>{n.title}</h3>
            <p className="news-desc">{n.excerpt}</p>
            <a href={n.url} className="news-link" target="_blank" rel="noreferrer">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
