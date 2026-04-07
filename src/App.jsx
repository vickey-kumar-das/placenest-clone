import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServicePage from './pages/ServicePage'
import JobDashboard from './pages/JobDashboard'
import PostJob from './pages/PostJob'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/jobs" element={<JobDashboard />} />
        <Route path="/jobs/post" element={<PostJob />} />
      </Routes>
    </Layout>
  )
}

export default App
