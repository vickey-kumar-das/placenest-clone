import { useState, useEffect } from 'react'

export default function Admin() {
  const [submissions, setSubmissions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
    setSubmissions(data)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') { // Simple password for demo
      setIsLoggedIn(true)
    } else {
      alert('Wrong password!')
    }
  }

  const deleteSubmission = (id) => {
    const updated = submissions.filter(s => s.id !== id)
    setSubmissions(updated)
    localStorage.setItem('formSubmissions', JSON.stringify(updated))
  }

  if (!isLoggedIn) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '2rem auto' }}>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Enter Admin Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Admin Dashboard</h1>
        <button onClick={() => setIsLoggedIn(false)} className="btn">Logout</button>
      </div>
      
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ background: '#f4f4f4', textAlign: 'left' }}>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Date</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Name</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Email</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Subject</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Resume</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Message</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid #ddd' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>{s.date}</td>
                  <td style={{ padding: '1rem' }}>{s.name}</td>
                  <td style={{ padding: '1rem' }}>{s.email}</td>
                  <td style={{ padding: '1rem' }}>{s.subject}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ color: '#007bff' }}>📄 {s.resumeName}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <details>
                      <summary>View</summary>
                      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>{s.message}</p>
                    </details>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      onClick={() => deleteSubmission(s.id)}
                      style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
