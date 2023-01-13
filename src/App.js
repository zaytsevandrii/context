import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import { ClassContextComponents } from './ClassContextComponents';
import { FunctionContextComponent } from './FunctionContextComponent';

export const ThemeContext=createContext()
function App() {
  const[darkTheme,setDarktheme]=useState(true)

  function toggleTheme(){
    setDarktheme(prevTheme=>!prevTheme)
  }
  return (
    <div className="App">
     <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent/>
        <ClassContextComponents/>
     </ThemeContext.Provider>
    </div>
  );
}

export default App;
