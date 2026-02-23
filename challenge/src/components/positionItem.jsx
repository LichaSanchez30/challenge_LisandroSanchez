import { useState } from "react"

function PositionItem({position, onSubmit}){
    
    const[repoUrl, setRepoUrl] = useState("")

    const submit = ()=>{
        if(!repoUrl.trim()){
            alert("Ingresa la URL de tu repositorio GitHub")
            return
        }

        onSubmit(position.id, repoUrl)
    }
    return(
        <div style={styles.card}>
            <h3 style ={styles.titulo}>
                {position.title}
            </h3>
            <input style={styles.input} type="text" 
            placeholder="https://github.com/your-repo"
            value={repoUrl} 
            onChange={(e) => setRepoUrl(e.target.value)}/>
            <button style={styles.button} onClick={submit}>
                Submit
            </button>
        </div>
    )
}

const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    input: {
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "8px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#646cff",
        color: "white",
        cursor: "pointer",
    },
    titulo:{
        color:"whitesmoke"
    }
}


export default PositionItem