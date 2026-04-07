import { useState } from 'react'
import { Link } from 'react-router-dom'

const servicesLinks = [
  { to: '/services/build-talent-community', label: 'Build a Talent Community' },
  { to: '/services/employer-brand', label: 'Improve the Employer Brand Value' },
  { to: '/services/cost-per-hire', label: 'Figure Out the Cost-per-Hire' },
  { to: '/services/reduce-failure-rates', label: 'Reduce New Hire Failure Rates' },
  { to: '/services/recruitment-marketing', label: 'Up Your Recruitment Marketing Efforts' },
  { to: '/services/network-socialize', label: 'Network and Socialize' },
  { to: '/services/accelerate-hiring', label: 'Accelerate the Hiring Process' },
  { to: '/services/quality-of-hire', label: 'Refine the Quality of Hire' },
]

const jobsLinks = [
  { to: '/jobs', label: 'Job Dashboard' },
  { to: '/jobs/post', label: 'Post a Job' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-wrap">
          <div className="logo-icon" aria-hidden="true">P</div>
          <div>
            <span className="logo-text">PLACENEST SERVICES</span>
            <span className="logo-tagline">Remedies of your executive search</span>
          </div>
        </Link>

        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <div className="dropdown-wrap">
            <button type="button" className="dropdown-trigger">
              Services ▾
            </button>
            <div className="dropdown-menu">
              {servicesLinks.map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)}>{label}</Link>
              ))}
            </div>
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="dropdown-wrap">
            <button type="button" className="dropdown-trigger">
              Jobs ▾
            </button>
            <div className="dropdown-menu">
              {jobsLinks.map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)}>{label}</Link>
              ))}
            </div>
          </div>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <nav className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/blog" className="nav-link" onClick={() => setMobileOpen(false)}>Blog</Link>
        <div className="dropdown-wrap">
          <button type="button" className="dropdown-trigger">Services ▾</button>
          <div className="dropdown-menu">
            {servicesLinks.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
        <Link to="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
        <div className="dropdown-wrap">
          <button type="button" className="dropdown-trigger">Jobs ▾</button>
          <div className="dropdown-menu">
            {jobsLinks.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
