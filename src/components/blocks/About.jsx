export default function About({ data }) {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>{data.heading}</h2>
        <h3>
          {data.subheadingTop} <br />
          <span className="highlight-text">{data.highlight}</span>
        </h3>
        <div className="who-we-are">
          <h3>WHO <br />WE ARE</h3>
          <a href={data.whoWeAre?.href} className="know-more-btn">
            {data.whoWeAre?.linkLabel} <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div className="about-right">
        {data.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
        <br /><br />
        <p>{data.since}</p>
      </div>
    </div>
  );
}
