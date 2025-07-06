import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <div>
            <nav>              
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
            </nav>
        </div>
    )       // Link tag allows us to change pages without page reload 
}

export default Navbar