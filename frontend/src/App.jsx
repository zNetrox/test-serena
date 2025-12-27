import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [medicaments, setMedicaments] = useState([])
  const [error, setError] = useState(null)

  // le useEffect sert ici a n'appeler qu'une seul fois ce code au debut
  useEffect(() => {
    fetch('http://localhost:8080/?route=medicament/list') // A changer pour le serveur
      .then((response) => {
        return response.json() // recupere les données
      })
      .then((data) => {
        setMedicaments(data)
      })
      .catch((err) => {
        console.error("Erreur de récupération:", err)
        setError(err.message)
      });
  }, []);

  if (error !== null) {
    return <div style={{ color: 'red' }}>Erreur : {error}</div>
  } 

  return (
    <div className="App">
      <h1>Stock</h1>

      {medicaments.length === 0 ? (
        <p>Aucun médicament</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {medicaments.map((medic) => (
              <tr key={medic.id}>
                <td>{medic.id}</td>
                <td>{medic.name}</td>
                <td>{medic.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App