import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./PokeApi.css";

function PokeApi() {

    const refName = useRef();
    const goTo = useNavigate();
    const searchHandler = (e) =>  {
        e.preventDefault();

        const name = refName.current.value.trim().toLowerCase();
        goTo("/projects/pokeapi/"+name);
    }

    return (
        <div className="container">
            <div className="searchP">
                <h2>Pokemon Finder</h2>
                <hr />
                <form onSubmit={searchHandler}>
                    <label>
                        <span>Name of the Pokemon</span>
                        <input ref={refName} type="text" required/>
                    </label>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default PokeApi