import {useParams} from 'react-router';

function Perfil(){
    const {userId} = useParams()
    return <>{userId}</>
}
export default Perfil