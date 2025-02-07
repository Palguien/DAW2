import {useParams} from 'react-router';
import { useState, useEffect } from 'react'
import './posts.css'
function Perfil(){
    const {userId} = useParams()

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect( () => {
        async function fetchUserNames(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users/'+`${userId}`)
            const userList = await res.json()
            console.log(userList)
            setUsers(userList)
            setLoading(false)
        }
        fetchUserNames()
    }, [])  //Lista de dependencias vacía <h2>{users[(post.id)-1]}</h2>
    
    return (
        <div className='perfil'>
            
                    <div className="user">
                        <h1>{users.name}</h1>
                        <p>{users.email}</p>
                        <p>{users.username}</p>
                    </div>
            
        </div>

    )
}
export default Perfil