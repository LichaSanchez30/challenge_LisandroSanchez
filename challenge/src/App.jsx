import { useEffect, useState } from 'react'
import { Candidate, JobsList, ApplyJob } from './api/api'
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
        setPositions(data)
      }catch(err){
        console.log(err.message
        )
      }
    }

    fetchJobsList()
  },[])

  const submitApplication = async (positionId, repoUrl) =>{
    if(!candidato){
      alert("Candidato no encontrado")
      return
    }
    const payload = {
      uuid: candidato.uuid,
      jobId: positionId,
      candidateId: candidato.candidateId,
      applicationId: candidato.applicationId,
      repoUrl
}
console.log(payload)
    try{
      const result = await ApplyJob({
        uuid: candidato.uuid,
        jobId: positionId,
        candidateId: candidato.candidateId,
        applicationId: candidato.applicationId,
        repoUrl
    })
    result
    alert("Postulación enviada correctamente")
    
    }catch(err){
      console.log(err)
    }
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