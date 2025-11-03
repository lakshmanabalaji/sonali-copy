export default function Certs({ data }) {
  return (
    <div className="certifications-section">
      <div className="cert-content">
        <div className="cert-left">
          <p className="cert-subtitle">{data.title}</p>
          <h2>{data.heading} <br /><span>{data.highlight}</span></h2>
        </div>
        <div className="cert-right">
          <p className="cert-desc">{data.description}</p>
        </div>
      </div>
      <div className="cert-logos">
        {data.logos?.map((l) => <img key={l.alt} src={l.imageUrl} alt={l.alt} />)}
      </div>
    </div>
  );
}
