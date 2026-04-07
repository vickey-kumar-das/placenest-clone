import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e) => {
    setResume(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Send to Web3Forms (Gmail)
      const formData = new FormData(e.target)
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE") // User will replace this or I'll explain
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (result.success) {
        // 2. Save to local Admin data
        const submission = {
          ...form,
          resumeName: resume ? resume.name : 'No resume',
          date: new Date().toLocaleString(),
          id: Date.now()
        }
        const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
        localStorage.setItem('formSubmissions', JSON.stringify([submission, ...existingSubmissions]))

        alert('Thank you! Your message and resume have been sent to Gmail and saved in Admin.')
        setForm({ name: '', email: '', subject: '', message: '' })
        setResume(null)
        e.target.reset()
      } else {
        alert('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Error sending form. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have a question or need assistance? We're here to help.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3 className="section-title" style={{ fontSize: '1.25rem', textAlign: 'left' }}>Get in Touch</h3>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong></p>
              <a href="mailto:support@placenestservices.com">support@placenestservices.com</a>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Phone:</strong></p>
              <a href="tel:+919317955459">+91 9317955459</a>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Address:</strong></p>
              <p>Plot No 249 Phase-03 Electricity Office Baddi- 173205</p>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Business Hours:</strong></p>
              <p>Monday – Saturday: 10.00 – 05.00<br />Sunday: Closed</p>
            </div>
            <div>
              <h3 className="section-title" style={{ fontSize: '1.25rem', textAlign: 'left' }}>Send a Message & Resume</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume (PDF/DOC)</label>
                  <input id="resume" name="resume" type="file" onChange={handleFileChange} required accept=".pdf,.doc,.docx" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Your message" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message & Resume'}
                </button>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h3 className="section-title" style={{ fontSize: '1.25rem', textAlign: 'left', marginBottom: '1rem' }}>Find Us</h3>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.88!2d76.7914!3d30.9578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f6e2a8f2f0a01%3A0x0!2sBaddi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000"
                title="Placenest Services - Baddi Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-address">
              <strong>Address:</strong> Plot No 249 Phase-03 Electricity Office Baddi- 173205
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
