function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul Kumar',
      review:
        'Amazing sound and lighting setup. Our music event was a huge success.'
    },
    {
      name: 'Priya Sharma',
      review:
        'Professional team and excellent event management from start to finish.'
    },
    {
      name: 'Arjun Singh',
      review:
        'The LED wall and stage production exceeded our expectations.'
    }
  ];

  return (
    <section
      style={{
        padding: '80px 20px',
        background: '#f5f5f5'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}
      >
        What Our Clients Say
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        {testimonials.map(
          (testimonial, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '12px',
                boxShadow:
                  '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <h3>★★★★★</h3>

              <p>
                "{testimonial.review}"
              </p>

              <strong>
                - {testimonial.name}
              </strong>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Testimonials;