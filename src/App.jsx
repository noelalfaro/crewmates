import './App.css'
import CrewmatesGroup from "./assets/crewmates-group.png"

function App() {

  return (
    <div className="App">
      <h1>Crewmates</h1>
      <h3>Create your own, edit & delete others, or view the gallery of all the crewmates currently in the database.</h3>
      <img src={CrewmatesGroup} width="700px" alt="crewmates-group.png" />
    </div>
  )
}

export default App
