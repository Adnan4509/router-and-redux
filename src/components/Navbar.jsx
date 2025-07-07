import { NavLink } from "react-router-dom"

const Navbar = () => {

    return(
        <div>
            <nav>              
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/about"><li>About Us</li></NavLink>
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/contact"><li>Contact Us</li></NavLink>
            </nav>
        </div>
    )       // NavLink tag allows us to change pages without page reload
            // And can also track active link 
}

export default Navbar