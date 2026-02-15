import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Layout from "./Layout";
import ScrollToTop from './components/ScrollToTop'   // ✅ added

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ added — global smooth route scroll */}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
