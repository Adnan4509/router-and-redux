import { useParams } from "react-router-dom"  //This hook allows us to pass parameters in the url

const User = () => {
    const params = useParams()              
    return(
        <div>
           I am {params.username}
        </div>
    )
}

export default User