import { useState, useEffect } from 'react'

const Comentarios =  ({postId}) => {
    const [comments, setComentarios] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchComentarios(){
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId='+`${postId}`)
            const postList = await res.json()
            setComentarios(postList)
            setLoading(false)
        }
        fetchComentarios()
    }, [])  //Lista de dependencias vacía

    async function onToggle(e) {
        if(!loading) setLoading(true);
    }

    return <details onToggle={onToggle}>
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