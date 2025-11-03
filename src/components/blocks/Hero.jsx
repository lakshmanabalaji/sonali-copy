export default function Hero({ data }) {
  return (
    <div className="overlay">
      <h1>
        {data.titleLine1} <br /> <span>{data.titleLine2}</span>
      </h1>
      <h3>{data.subtitle}</h3>
      <p>{data.tagline}</p>
      <div className="button-group">
        {data.ctas?.map((c) => (
          <a key={c.label} className={`btn ${c.style}`} href={c.href}>
            {c.label} <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
