import { Link } from 'react-router-dom'

const serviceItems = [
  { slug: 'build-talent-community', title: 'Build a Talent Community' },
  { slug: 'employer-brand', title: 'Improve the Employer Brand Value' },
  { slug: 'cost-per-hire', title: 'Figure Out the Cost-per-Hire' },
  { slug: 'reduce-failure-rates', title: 'Reduce New Hire Failure Rates' },
  { slug: 'recruitment-marketing', title: 'Up Your Recruitment Marketing Efforts' },
  { slug: 'network-socialize', title: 'Network and Socialize' },
  { slug: 'accelerate-hiring', title: 'Accelerate the Hiring Process' },
  { slug: 'quality-of-hire', title: 'Refine the Quality of Hire' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Strategic talent acquisition and corporate training solutions</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            We offer end-to-end recruitment, staffing, and talent solutions tailored to your business needs.
          </p>
          <div className="cards-grid">
            {serviceItems.map(({ slug, title }) => (
              <Link key={slug} to={`/services/${slug}`} style={{ color: 'inherit' }}>
                <div className="card">
                  <h3>{title}</h3>
                  <p>Learn more about this service →</p>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </p>
        </div>
      </section>
    </>
  )
}
