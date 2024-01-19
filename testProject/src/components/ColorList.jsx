import React, { useState } from 'react'

function ColorList(props) {
  const [color,setColor] = useState('black')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
    </div>
  )
}

export default ColorList