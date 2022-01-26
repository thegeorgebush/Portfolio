import React from 'react'
import About from './components/aboutPage/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './components/projectsPage/projects'
import Navbar from './components/Navbar/navbar';
import Resume from './components/resumePage/resume'
import Footer from './components/Footer/footer'
import Contact from './components/contactPage/contact'

const App = () => {
  return (
    <>
    
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
