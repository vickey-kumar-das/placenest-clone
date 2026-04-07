import { Link } from 'react-router-dom'
import WhatsAppIcon from '../components/WhatsAppIcon'

const services = [
  {
    title: 'Recruitment',
    desc: 'End-to-end hiring solutions tailored to your business needs',
  },
  {
    title: 'Talent Acquisition',
    desc: 'Strategic sourcing of top-tier professionals',
  },
  {
    title: 'Staffing',
    desc: 'Temporary, permanent, and project-based staffing solutions',
  },
  {
    title: 'Job Placement',
    desc: 'Seamless placement services for employers and job seekers',
  },
]

const whyPlacenest = [
  'Refine the quality of hire',
  'Accelerate the hiring process',
  'Network and socialize',
  'Up your recruitment',
  'Reduce new hire failure rates',
  'Figure out the cost per hire',
  'Improve the employment brand value',
  'Build a talent community',
]

const testimonials = [
  {
    quote: 'Placenest consistently delivers top-tier candidates with unmatched professionalism.',
    author: 'Mrs. Anshu - Noble Printing',
    rating: 4.5,
  },
  {
    quote: "Their team understands our needs deeply and always responds with agility and care.",
    author: 'Mr. Tushar Shah - Rich Printers',
    rating: 5,
  },
  {
    quote: "We trust Placenest for their integrity, innovation, and results-driven approach.",
    author: 'Mr. Balraj - Kumar Printers',
    rating: 4.5,
  },
]

function Stars({ n }) {
  const full = Math.min(5, Math.floor(n))
  return (
    <span className="testimonial-stars" aria-label={`Rated ${n} out of 5`}>
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
    </span>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Need help hiring the right people? Placenest takes care of the entire recruitment process—so you can focus on running your business.</h1>
          <p>We find the "Right Fit" for the "Right Job". We are the best recruitment agency in India and our years of experience in staffing and recruitment solutions have led us to be one of the most trusted staffing agencies in the country.</p>
          <Link to="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Get in Touch</Link>
        </div>
      </section>

      {/* What We Do Best */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
            Recruitment | Hiring | Talent Acquisition Sourcing | Candidate Search | Staffing Head Hunting | Job Placement Workforce Planning | Personnel Selection
          </p>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Link to="/contact" className="btn btn-primary">Let's Build Your Team Together</Link>
          </p>
          <div className="cards-grid">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Placenest */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Placenest?</h2>
          <p className="section-subtitle">Strategic talent acquisition and corporate training solution</p>
          <div className="why-list">
            {whyPlacenest.map((item, i) => (
              <div key={i} className="why-item">
                <span className="why-num">{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me / Founder */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="founder-wrap">
            <div className="founder-photo" aria-hidden="true">
              <span>Photo</span>
            </div>
            <div style={{ flex: 1 }}>
            <p style={{ marginBottom: '1rem', color: 'var(--text)' }}>
              After resigning from my HR Profile Job, I have decided to focus on assisting companies in addressing their recruitment and training needs, particularly in light of their business scale-up initiatives. I believe that as organizations grow, they encounter unique challenges that require targeted solutions in talent acquisition and employee development. By leveraging my expertise in these areas, I aim to help businesses identify their specific requirements and implement effective strategies to attract and retain top talent. Additionally, I will work closely with management teams to design and deliver training programs that enhance workforce skills and align with the company's goals. My ultimate objective is to contribute to the sustainable growth of businesses by ensuring they have the right people, equipped with the right skills, at the right time.
            </p>
            <p style={{ fontWeight: 600, color: 'var(--primary)' }}>— Samir Kumar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why work with us?</h2>
          <p className="section-subtitle">
            Placenest Services stands out with its commitment to quality, innovation, and client-focused HR solutions, making it a trusted partner for companies seeking reliable recruitment and training support. This visual highlights eight core strengths that define our value proposition—from timely delivery to tech-enabled excellence.
          </p>
          <div className="why-strengths">
            {[
              'Timely delivery',
              'Quality focus',
              'Innovation',
              'Client-focused',
              'Results-driven',
              'Tech-enabled',
              'Integrity',
              'Excellence',
            ].map((label, i) => (
              <div key={i} className="why-item strength-item">
                <span className="why-num">{i + 1}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Our Clients Speak!</h2>
          <p className="section-subtitle">
            Take a look at what our clients have to say about our work and dedication that keeps them coming back for more.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <Stars n={t.rating} />
                <p className="testimonial-text">"{t.quote}"</p>
                <p className="testimonial-author">{t.author}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Rated {t.rating} out of 5</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Call For Bookings and Appointments</h2>
          <p style={{ marginBottom: '0.5rem' }}>
            📩 Have a question or need assistance? Feel free to reach out to us anytime at our official email:{' '}
            <a href="mailto:support@placenestservices.com">support@placenestservices.com</a>. Our team is here to help with prompt, professional support tailored to your needs.
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '1rem' }}>
            <a href="tel:+919317955459" style={{ color: 'inherit' }}>+91 9317955459</a>
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="https://wa.me/919317955459" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              <WhatsAppIcon size={22} className="wa-icon" /> WhatsApp us
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
