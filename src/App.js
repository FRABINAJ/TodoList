import React from "react"
import "./App.css"
import { useState } from "react"

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const removeTodo = (id) => {
    setToDos(toDos.filter((item) => item.id !== id))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1 style={{ color: "black", fontSize: "50px" }}>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <br />
        <h2 style={{ color: "black", fontSize: "20px" }}> Write any list of item</h2>
      </div>
      <div className="input" style={{ height: "50px" }}>
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.value)
                    console.log(obj)
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id == obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => removeTodo(obj.id)} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1 style={{ color: "grey" }}>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  )
}

export default App
