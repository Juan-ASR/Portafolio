import "../styles/FormaCard.css"


function FormaCard({foto, titulo, duracion}) {
    return (
        <div className="cardF">
                <img src={foto} alt={titulo} />
                
                <div className="cardFtext">
                    <h3>{titulo}</h3>
                    <p>{duracion}</p>
                </div>
        </div>
    )
}

export default FormaCard