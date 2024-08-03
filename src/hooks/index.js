import { FontProvider } from "react";

export function AppProvider ({Children}){
    return <FontProvider> {Children} </FontProvider>
}