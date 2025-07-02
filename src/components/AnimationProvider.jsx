import { createContext, useEffect, useRef } from "react"
import Header from "./Header.jsx"
// import "../styles/App.css"

export const AnimationContext = createContext();

function AnimationProvider({ children }) {
    const refMain = useRef();

    const showHandler = () => {
        refMain.current.classList.add("mostrarVista");
        setTimeout(() => {
            refMain.current.classList.remove("mostrarVista");
            // setTimeout(() => {
            // }, 1000);
        }, 1000);
    };

    const hideHandler = () => {
        refMain.current.classList.add("ocultarVista");
        setTimeout(() => {
            refMain.current.classList.remove("ocultarVista");
        }, 1000);
    }

    useEffect(() => {
        showHandler();
    }, []);

    return (
        <AnimationContext.Provider value={{ showHandler, hideHandler }}>
            <Header />
            <main className="Main" ref={refMain}>
                {children}
            </main>
        </AnimationContext.Provider>
    );
}




export default AnimationProvider