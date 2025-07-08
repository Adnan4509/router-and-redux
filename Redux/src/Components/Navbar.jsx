import { useSelector } from "react-redux"

function Navbar(){                  //We removed props and used useSelector hook instead
      const count = useSelector((state) => state.counter.value)

    return(
        <div>
             I am a navbar and counter is {count}
        </div>
    )
}

export default Navbar