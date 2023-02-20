import React from 'react'
import { Routes , Route} from "react-router-dom";
import Home from './Home';

const About = () => {
   return (
    <h1>About</h1>
   )
}
export default function App() {
  return (
     <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/' element={ <About/>}/>
     </Routes>
  )
}