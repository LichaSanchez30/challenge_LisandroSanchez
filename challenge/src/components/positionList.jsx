import PositionItem from "./positionItem";

function PositionsList({positions, onSubmit}){
    if(!positions || positions.length ===0){
        return <h4>No hay posiciones disponibles</h4>
    }

    return(
        <div>
            {positions.map((position)=>{
                return(
                <PositionItem
                    key={position.id}
                    position={position}
                    onSubmit={onSubmit}
                />
                )
            })}
        </div>
    )
}

export default PositionsList