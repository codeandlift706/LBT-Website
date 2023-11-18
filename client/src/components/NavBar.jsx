// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'; //useLocation is a hook that will return to us the location object

function NavBar() {
    const location = useLocation(); //useLocation is a hook that will return to us the location object
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
            <p>You are now at: {location.pathname}</p> {/* location.pathname is a property of the location object */}
        </nav>
    );
}

export default NavBar;