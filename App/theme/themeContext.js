import {createContext, useState} from 'react';
import { themes } from './themeStyle';




export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    
    //default theme is light
     const [dark, setDark] = useState(false)

     //toggle between dark and light modes

     const toggle = ()=>{
         setDark(!dark)

     }

     // filter the styles based on the theme selected

     const theme = dark ? themes.dark : themes.light

     return(
         <ThemeContext.Provider value={{dark, theme, toggle}}>
              {children}
         </ThemeContext.Provider>
     )
}


