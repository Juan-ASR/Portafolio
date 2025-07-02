import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokeCard.css";

function PokeCard() {
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [poke, setPoke] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then(
            response => {
                return response.json();
            }
        )
        .then(
            data => {
                setPoke(data);
                setCargando(false);
            }
        )
        .catch(
            error => {
                console.log(error);
                setError(true);
                setCargando(false);
            }
        )
    }, [])
    return (
        <div className="container">
            {cargando && <p>Loading...</p>}
            {error && <p>Error: Pokemon not found</p>}
            {poke && 
                <div className="pCard">
                    <h2>{poke.name}</h2>
                    <img src={poke.sprites.other["official-artwork"].front_default}  alt={poke.name} />
                    <h3>Types:</h3>
                    {poke.types.map((type, index) => (
                        <p key={index} className={type.type.name}>{type.type.name}</p>
                    ))}
                    {console.log(poke)}
                </div>
            }
        </div>
    )
}

export default PokeCard