// Imports
import { useEffect, useState } from 'react'
import './App.css'


//App
export default function App() {
  const [tareas, setTareas] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(()=>{
    async function fetchTareas() {
      const rest = await fetch("http://localhost:3000/object");
      const result = await rest.json();
      setTareas(result);
      setChange(false)
    }
    fetchTareas();
  },[change]);

  return (
    <div className='main'>
      <h3>Añadir nueva tarea</h3>
      <form className='form'>
        <input type='text' name='task' placeholder='Nombre de la tarea' id='name'/>
        
        <button type='submit' onClick={(e) =>{
          e.preventDefault()
          let task = document.getElementById("name");
          //1 -- Añadir Tarea
          async function newTask(task) {
            let tarea = {
              "name" : task.value,
              "value" : "false"
            }

            const res = await fetch("http://localhost:3000/object",{
              method:"POST",
              headers:{
                "Content-Type": "application/json"
              },
              body:JSON.stringify(tarea)
            })

            setChange(true);
          }

          newTask(task);
        }}> Añadir tarea </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map(tarea => 
            <tr className='task' key={tarea.id}>
              <td>{tarea.name}</td>
              <td>{checkBox(tarea.value,tarea.name)}</td>
              <td><button type='submit' onClick={(e) =>{
                e.preventDefault();
                //2 -- Borrar Tarea
                async function deleteTask() {
                  const res = await fetch(`http://localhost:3000/object/${tarea.name}`,{method:"DELETE"})
                }
                deleteTask(tarea.name);
                setChange(true)

              }}>Eliminar</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
  //3 -- Cambiar estado: por ahora falla
  function checkBox(value,name){
    if(value === "false"){
      return (
        <button onClick={(e) =>{
          e.preventDefault();

          async function setTrue(name) {
            let task ={
              "value" : "truee"
            }
            const rest = await fetch(`http://localhost:3000/object/${name}`,{method:"PUT",headers:{"Content-Type": "application/json"},body:JSON.stringify(task)})
          }
          setTrue(name);
          setChange(true);
        }}>Sin hacer</button>
      )
    }else{
      return (
        <button onClick={(e) =>{
          e.preventDefault();

          async function setFalse(name) {
            let task ={
              "value" : "false"
            }
            const rest = await fetch(`http://localhost:3000/object/${name}`,{method:"PUT",headers:{"Content-Type": "application/json"},body:JSON.stringify(task)})
          }
          setFalse(name);
          setChange(true);
        }}>Completada</button>
      )
    }
  }
}