import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const addItem = (e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo("")
    }
  return (
    <form onSubmit={addItem} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border placeholder-slate-200 border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg mx-2 px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
    </form>
  )
}

export default TodoForm