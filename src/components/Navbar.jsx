

const Navbar = () => {

    return(
        <div>
            <nav>       {/* when using this anchor tag the page is loaded whenever a link is clicked */}
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About Us</li></a>
                <a href="/contact"><li>Contact Us</li></a>
            </nav>
        </div>
    )
}

export default Navbar