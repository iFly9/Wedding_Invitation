function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-5">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">{title}</h2>
      <div className="gold-line"></div>
    </div>
  );
}

export default SectionTitle;