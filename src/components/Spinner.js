import React from 'react'
import Spinn from './Spinn.gif'
const Spinner = () => {
  
    return (
      <div className='text-center'>
        <img src = {Spinn} alt ="loading" width={50} height={50}/> 
      </div>
    )
}
export default Spinner
