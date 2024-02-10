import './App.css'
import { useState } from 'react'

function App() {
const [backgroundColor,setBackgroundColor] = useState('');

  const colorChange = (color)=>{
    setBackgroundColor(color)
  }
  return (
    <div style={{height : '100vh',width : '100%', backgroundColor}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{color : 'black'}}>Background Color Changer</h1>
      <div>
        <button style={{marginRight : '5px',color : 'Red'}} className='button' onClick={()=>colorChange('Red')}>Red</button>
        <button style={{marginRight : '5px',color : 'yellow'}} className='button' onClick={()=>colorChange('yellow')}>yellow</button>
        <button style={{marginRight : '5px',color : 'violet'}} className='button' onClick={()=>colorChange('violet')}>violet</button>
        <button style={{marginRight : '5px',color : 'pink'}} className='button' onClick={()=>colorChange('pink')}>Pink</button>
        <button style={{marginRight : '5px',color : 'purple'}} className='button' onClick={()=>colorChange('purple')}>purple</button>
      </div>
    </div>
    )
}

export default App
