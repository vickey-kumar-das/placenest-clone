import { Link } from 'react-router-dom'

const placeholderJobs = [
  { id: 1, title: 'Senior HR Manager', location: 'Baddi', type: 'Full-time', posted: 'Mar 12, 2025' },
  { id: 2, title: 'Recruitment Coordinator', location: 'Remote', type: 'Full-time', posted: 'Mar 10, 2025' },
  { id: 3, title: 'Talent Acquisition Specialist', location: 'Baddi', type: 'Contract', posted: 'Mar 8, 2025' },
]

export default function JobDashboard() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Job Dashboard</h1>
          <p>Browse current openings and manage job listings</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
            <Link to="/jobs/post" className="btn btn-primary">Post a Job</Link>
          </p>
          <div className="cards-grid">
            {placeholderJobs.map((job) => (
              <div key={job.id} className="card">
                <h3>{job.title}</h3>
                <p style={{ marginBottom: '0.25rem' }}><strong>Location:</strong> {job.location}</p>
                <p style={{ marginBottom: '0.25rem' }}><strong>Type:</strong> {job.type}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Posted: {job.posted}</p>
                <Link to="#" className="btn btn-outline" style={{ marginTop: '1rem' }}>View details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
