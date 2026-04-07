import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Placenest Services</h1>
          <p>Remedies of your executive search</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 auto 1.5rem' }}>
            We find the "Right Fit" for the "Right Job". We are the best recruitment agency in India and our years of experience in staffing and recruitment solutions have led us to be one of the most trusted staffing agencies in the country.
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto 1rem', color: 'var(--text)' }}>
            Placenest takes care of the entire recruitment process—so you can focus on running your business. We offer end-to-end hiring solutions, talent acquisition, staffing, and job placement services tailored to your needs.
          </p>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>About Our Founder</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto 1rem', color: 'var(--text)' }}>
            After resigning from my HR Profile Job, I have decided to focus on assisting companies in addressing their recruitment and training needs, particularly in light of their business scale-up initiatives. I believe that as organizations grow, they encounter unique challenges that require targeted solutions in talent acquisition and employee development.
          </p>
          <p style={{ fontWeight: 600, color: 'var(--primary)', marginTop: '1rem' }}>— Samir Kumar</p>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </p>
        </div>
      </section>
    </>
  )
}
