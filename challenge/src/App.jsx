import { useEffect } from 'react'
import { Candidate, JobsList } from './components/components_prueba'
import './App.css'

function App() {
  // const [candidato, setCandidato] = useState(null)
  // const [error, setError] = useState(null)
  useEffect(()=>{
    const fetchCandidate = async() =>{
      try{
        const data = await Candidate('licha.sanchez.30@hotmail.com')
        console.log(data)

      } catch(err){
        console.log(err.message)
      }
    }
    fetchCandidate()

    const fetchJobsListc = async() =>{
      try{
        const data = await JobsList()
        console.log(data)
      }catch(err){
        console.log(err.message
        )
      }
    }

    fetchJobsListc()
  },[])

  
}

export default App