
const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

export const Candidate = async (email)=>{
    const response = await fetch(
        `${BASE_URL}/api/candidate/get-by-email?email=${email}`
    )

    if(!response.ok){
        throw new Error("Error al obtener candidato")
    }

    return response.json()

}

export const JobsList = async () =>{
    const response = await fetch(
        `${BASE_URL}/api/jobs/get-list`
    )

    if(!response.ok){
        throw new Error("Error al obtener lista de posiciones abiertas")
    }

    return response.json()
}

