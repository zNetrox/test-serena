import { useEffect, useState } from 'react'

function Accueil() {
  const [medicaments, setMedicaments] = useState([])
  const [error, setError] = useState(null)

  const apiUrl = import.meta.env.VITE_API_URL;

  // le useEffect sert ici est appeler qu'une seul fois ce code au debut
  useEffect(() => {
    fetch(`${apiUrl}/?route=medicament/list`)
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
    <div className="accueil">
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

export default Accueil