export default function Applications({ data }) {
  return (
    <div className="applications-section">
      <p className="app-subtitle">{data.title}</p>
      <h2>{data.heading} <br /><span>{data.highlight}</span></h2>
      <div className="applications-grid">
        {data.cards?.map((c) => (
          <div className="app-card" key={c.title}>
            <div className="icon">{c.icon}</div>
            <p>{c.text}</p>
            <h3>{c.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
