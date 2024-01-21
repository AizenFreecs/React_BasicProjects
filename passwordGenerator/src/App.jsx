import { useRef } from 'react'
import { useEffect } from 'react'
import { useState,useCallback } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="1234567890"
    if(charAllow) str += "@%&!/<>?;()\[]{}"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    
  },[length,numAllow,charAllow,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md px-4 py-2 bg-gray-600 rounded-md mx-auto shadow-md my-8">
      <h1 className="text-cyan-400 text-2xl text-center my-4">Password Generator</h1>
      <div className="flex rounded-sm overflow-hidden ">
        <input 
        type='text'
        value={password}
        className="text-orange-500 bg-slate-300 rounded-md outline-none px-3 py-2 shadow-md mx-2"
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button className="rounded-md bg-green-600 px-3 py-2 outline-none mx-2"
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex rounded-sm my-4 text-sm align-middle justify-center'>
        <input type='range' 
         min="1"
         max="20"
         value={length}
         className="cursor-pointer"
         onChange={(e)=>{setLength(e.target.value)}} />
         <label className="text-xl text-white mx-4">Length : {length}</label>
      </div>
      <div className="flex rounded-sm items-center gap-x-1 align-middle justify-center">
        <input type="checkbox"
        defaultChecked={numAllow}
        id='numberInput'
        onChange={()=>{
          setNumAllow((prev)=>!prev)
        }} />
        <label className="text-xl text-white mx-4">Numbers</label>
        <input type="checkbox"
        defaultChecked={charAllow}
        id='characterInput'
        onChange={()=>{
          setCharAllow((prev)=>!prev)
        }} />
        <label className="text-xl text-white mx-4">Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
