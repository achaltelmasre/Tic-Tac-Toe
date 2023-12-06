import React  from 'react'
import { useState } from "react";
import "./App.css";


function App() {
  const [player, setPlayer] = useState(1)

  return (
    <div>
      <h1 className='text-center'>Tic Tac  Toe </h1>

   <div>
       <span>
        
       </span>
   </div>

    <div className='board'>

    <div className='row'>
         <div className='box'></div>
         <div className='box'></div>
         <div className='box'></div>
      </div>

      <div className='row'>
         <div className='box'></div>
         <div className='box'></div>
         <div className='box'></div>
      </div>

      <div className='row'>
         <div className='box'></div>
         <div className='box'></div>
         <div className='box'></div>
      </div>

    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    </div>
  )
}

export default App