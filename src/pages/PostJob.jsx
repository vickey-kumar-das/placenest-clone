import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PostJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: '',
    contactEmail: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Job submitted successfully! (This is a demo – form is not connected to a backend.)')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Post a Job</h1>
          <p>List your vacancy and reach the right candidates</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p style={{ marginBottom: '1.5rem' }}>
            <Link to="/jobs" className="btn btn-outline">← Back to Job Dashboard</Link>
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Job Title *</label>
                <input id="title" name="title" type="text" value={form.title} onChange={handleChange} required placeholder="e.g. Senior HR Manager" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} required placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input id="location" name="location" type="text" value={form.location} onChange={handleChange} required placeholder="e.g. Baddi, Remote" />
              </div>
              <div className="form-group">
                <label htmlFor="type">Job Type</label>
                <select id="type" name="type" value={form.type} onChange={handleChange}>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Job Description *</label>
                <textarea id="description" name="description" value={form.description} onChange={handleChange} required placeholder="Describe the role, requirements, and benefits..." />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email *</label>
                <input id="contactEmail" name="contactEmail" type="email" value={form.contactEmail} onChange={handleChange} required placeholder="hr@company.com" />
              </div>
              <button type="submit" className="btn btn-primary">Submit Job</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
