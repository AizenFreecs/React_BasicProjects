import { useState } from 'react'
function App() {
  const [color,setColor] = useState("olive")
  let colorArray = ["red","blue","green","violet"]
  
  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorArray.map((item,index)=>(
            <button key={index} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{backgroundColor: item}} onClick={()=>setColor(item)}>{item.toUpperCase()}</button>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default App
