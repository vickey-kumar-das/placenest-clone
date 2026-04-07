import Header from './Header'
import Footer from './Footer'
import WhatsAppIcon from './WhatsAppIcon'

export default function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <a
        href="https://wa.me/919317955459"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </>
  )
}
