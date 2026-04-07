import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Placenest Services</h4>
          <p>Remedies of your executive search</p>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Recruitment</Link>
          <p>Corporate Training</p>
          <p>Branding</p>
          <p>Hiring</p>
          <p>Outsource your HR</p>
          <p>Corporate Event</p>
        </div>
        <div>
          <h4>Email</h4>
          <a href="mailto:samir@placenestservices.com">samir@placenestservices.com</a>
        </div>
        <div>
          <h4>Address</h4>
          <p>Plot No 249 Phase-03 Electricity Office Baddi- 173205</p>
        </div>
        <div>
          <h4>Business Hours</h4>
          <p>Monday – Saturday: 10.00 – 05.00</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="https://wa.me/919317955459" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          <WhatsAppIcon size={20} className="wa-icon" /> WhatsApp us
        </a>
        <span style={{ margin: '0 0.5rem' }}>|</span>
        Copyright © {currentYear} PLACENEST SERVICES | Powered by PLACENEST SERVICES
      </div>
    </footer>
  )
}
