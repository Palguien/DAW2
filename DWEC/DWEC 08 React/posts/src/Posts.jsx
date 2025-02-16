import { useState, useEffect } from 'react'
import Comentarios from "./Comentarios.jsx"
import {Link} from "react-router"
import './posts.css'
function Posts() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchPosts(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const postList = await res.json()
            setPosts(postList)
            setLoading(false)
        }
        fetchPosts()
    }, [])  //Lista de dependencias vacía

    useEffect( () => {
        async function fetchUserNames(id){
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const userList = await res.json()
            setUsers(userList)
            //setLoading(false)
        }
        fetchUserNames()
    }, [])  //Lista de dependencias vacía <h2>{users[(post.id)-1]}</h2>


    return (
        <div className='post-list'>
            {
                posts.map(post => 
                    <div className="post" key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/usuario/${post.id}`}>Perfil</Link>
                        <h2>User: {users[post.userId-1]?.username}</h2>
                        <Comentarios postId={post.id}/>
                    </div>
                ) 
            }
        </div>

    )
}

export default Posts