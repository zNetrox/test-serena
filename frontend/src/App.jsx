import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css'

import Accueil from './pages/Accueil';
import Agenda from './pages/Agenda'
import Suivi from './pages/Suivi'
import Document from './pages/Document'

import SousPartie1 from './pages/SousPartie1'
import SousPartie2 from './pages/SousPartie2'
import SousPartie3 from './pages/SousPartie3'

import Nav from './components/nav/Nav';
import Header from './components/header/Header';

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
          <Header submenu={
            [
              {label: "sous menu 1", path: "sous_partie_1"},
              {label: "sous menu 2", path: "sous_partie_2"},
              {label: "sous menu 3", path: "sous_partie_3"}
            ]} />
          </>
        }>
          <Route path="sous_partie_1" element={<Accueil />}/> 
          <Route path="sous_partie_2" element={<SousPartie2 />}/>
          <Route path="sous_partie_3" element={<SousPartie3 />}/>
        </Route>

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