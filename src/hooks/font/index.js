import { createContext, useContext } from "react";

const FontContex = createContext ({})

export function FontProvider ({children}) {
    return <FontContex.Provider value={{}}> {children} </FontContex.Provider>

}

export function useFont () {
    const contex = useContext (FontContex)
    if (!contex) {
        throw new Error ("useFont must be used within a FontProvider");
    }
    return contex;
}