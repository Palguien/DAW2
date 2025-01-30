import { useState, useEffect } from 'react'

const Comentarios =  ({postId}) => {
    const [comments, setComentarios] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchPosts(){
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId='+`${postId}`)
            const postList = await res.json()
            setComentarios(postList)
            setLoading(false)
        }
        fetchPosts()
    }, [])  //Lista de dependencias vacía

    return <details>
        <summary>Comentarios</summary>
            {
            comments.map(comment => 
                <div className="comment" key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                    <h3>User: {comment.email}</h3>
                </div>
            ) 
        }
    </details>

    
}

export default Comentarios