import { Link } from 'react-router-dom'

const placeholderPosts = [
  { id: 1, title: 'Recruitment Best Practices in 2025', date: 'Mar 10, 2025', excerpt: 'How to attract and retain top talent in a competitive market.' },
  { id: 2, title: 'Building a Strong Employer Brand', date: 'Feb 28, 2025', excerpt: 'Why employer branding matters and how to improve it.' },
  { id: 3, title: 'Cost-per-Hire: What It Means and How to Optimize', date: 'Feb 15, 2025', excerpt: 'Understanding and reducing your cost per hire effectively.' },
]

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights on recruitment, hiring, and talent acquisition</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {placeholderPosts.map((post) => (
              <div key={post.id} className="card">
                <h3>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{post.date}</p>
                <p>{post.excerpt}</p>
                <Link to="#" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
