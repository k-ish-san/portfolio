import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import CursorButton from "./components/CursorButton.tsx";
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from  './pages/About.tsx';
import Projects from  './pages/Projects.tsx';
import Contact from  './pages/Contact.tsx';

import "./App.css";
import "./index.css";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);


 

  return (
    <>
      <Router>
        {load ? (
          <Loader load={load} />
        ) : (
            <>
       
            <Navbar />
            <CursorButton />

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              {/* Add more routes here as needed */}
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App
