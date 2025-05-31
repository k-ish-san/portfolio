import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import CursorButton from "./components/CursorButton.tsx";
import Footer from './components/Footer.tsx';
import Home from './components/Home/Home.tsx';

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
              <Route path="/" element={<Home />} />
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
