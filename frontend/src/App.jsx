import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css'

import Accueil from './pages/Accueil';
import Agenda from './pages/Agenda'
import Suivi from './pages/Suivi'
import Document from './pages/Document'

function App() {
  const location = useLocation();

  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="agenda">Agenda</Link>
        <Link to="suivi">Suivi</Link>
        <Link to="document">Document</Link>
      </nav>


      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Accueil />
        } />

        <Route path="agenda" element={
          <Agenda />
        } />

        <Route path="suivi" element={
          <Suivi />
        } />

        <Route path="document" element={
          <Document />
        } />

      </Routes>
    </>
  );
}

export default App