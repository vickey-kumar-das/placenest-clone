import { useParams, Link } from 'react-router-dom'

const serviceContent = {
  'build-talent-community': {
    title: 'Build a Talent Community',
    desc: 'Create and nurture a pipeline of qualified candidates aligned with your organization. We help you build a talent community that reduces time-to-hire and improves quality of hire.',
  },
  'employer-brand': {
    title: 'Improve the Employer Brand Value',
    desc: 'Strengthen your employer brand to attract top talent. We support you with messaging, channels, and strategies that make your company a preferred employer.',
  },
  'cost-per-hire': {
    title: 'Figure Out the Cost-per-Hire',
    desc: 'Understand and optimize your cost per hire with clear metrics and process improvements. We help you reduce recruitment costs without compromising on quality.',
  },
  'reduce-failure-rates': {
    title: 'Reduce New Hire Failure Rates',
    desc: 'Lower early attrition and mismatches through better assessment, onboarding, and role-fit. We focus on hiring people who stay and perform.',
  },
  'recruitment-marketing': {
    title: 'Up Your Recruitment Marketing Efforts',
    desc: 'Enhance your recruitment marketing with targeted campaigns, content, and channels. We help you reach the right candidates where they are.',
  },
  'network-socialize': {
    title: 'Network and Socialize',
    desc: 'Leverage networks and events to source and engage talent. We support you in building relationships and a strong talent pipeline through networking.',
  },
  'accelerate-hiring': {
    title: 'Accelerate the Hiring Process',
    desc: 'Speed up your hiring without sacrificing quality. We streamline sourcing, screening, and decision-making so you fill roles faster.',
  },
  'quality-of-hire': {
    title: 'Refine the Quality of Hire',
    desc: 'Improve the quality of your hires through better job definition, assessment, and selection. We help you hire people who deliver and fit your culture.',
  },
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = serviceContent[slug] || {
    title: 'Service',
    desc: 'This service helps you achieve your recruitment and talent goals. Contact us to learn more.',
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{service.title}</h1>
          <p>Strategic talent acquisition and corporate training solution</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text)' }}>{service.desc}</p>
            <p>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              {' '}
              <Link to="/services" className="btn btn-outline">Back to Services</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
