function WhyChooseUs() {
  const items = [
    'Professional Event Production',
    'Premium Sound & Lighting',
    'Experienced Team',
    'End-to-End Event Management'
  ];

  return (
    <section
      style={{
        padding: '80px 20px'
      }}
    >
      <h2>Why Choose Us</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(4,1fr)',
          gap: '20px'
        }}
      >
        {items.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;