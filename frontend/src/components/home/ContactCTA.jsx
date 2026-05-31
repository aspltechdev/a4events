import { Link } from 'react-router-dom';

function ContactCTA() {
  return (
    <section
      style={{
        padding: '100px 20px',
        textAlign: 'center'
      }}
    >
      <h2>
        Planning Your Next Event?
      </h2>

      <p>
        Let's create an unforgettable
        experience together.
      </p>

      <Link to="/contact">
        <button>
          Contact Us
        </button>
      </Link>
    </section>
  );
}

export default ContactCTA;