import React, { useContext } from "react"
import { ThemeContext } from "./App"

export const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext)
    const themeStyle={
        backgroundColor:darkTheme?'#333':'#CCC',
        color:darkTheme?'#CCC':'#333',
        padding:'2rem',
        margin:'2rem'
    }
    console.log(darkTheme)
    return <div style={themeStyle}> <h3>FunctionContextComponent</h3></div>
}
