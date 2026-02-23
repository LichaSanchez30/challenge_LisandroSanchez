import { useEffect, useState } from 'react'
import { Candidate, JobsList, applyJob } from './api/api'
import PositionsList from './components/positionList'
import './App.css'

function App() {
  const [candidato, setCandidato] = useState(null)
  const [positions, setPositions] = useState([])
  useEffect(()=>{
    const fetchCandidate = async() =>{
      try{
        const data = await Candidate('licha.sanchez.30@hotmail.com')
        setCandidato(data)

      } catch(err){
        console.log(err.message)
      }
    }
    fetchCandidate()

    const fetchJobsList = async() =>{
      try{
        const data = await JobsList()
        console.log(data)
        setPositions(data)
      }catch(err){
        console.log(err.message
        )
      }
    }

    fetchJobsList()
  },[])
    const submitApplication = (positionId, repoUrl) => {
    console.log("Applying to:", positionId)
    console.log("Repo:", repoUrl)
    
  }
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Posiciones</h1>
      <PositionsList
        positions={positions}
        onSubmit={submitApplication}
      />
    </div>
  )

  
}

export default App