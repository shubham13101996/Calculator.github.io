import React from 'react'
import './style.css'

const App = () => {
  return (
   
   <div className='calculator_container'>
    <div className='output_container'>
      <div className='previous_operand'>485,896 *</div>
      <div className='current_operand'>747,855</div>
    </div>
    <button className='span_two'>AC</button>
    <button>DEL</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className='span_two'>=</button>

   </div>
   
  )
}

export default App
