// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom'; //useLocation is a hook that will return to us the location object

function NavBar() {
    return (
        <>
            <nav className="navBar">
                <header className="navHeader">
                    <h1 className="navBarHeading"><Link to="/">Đoàn Lê Bảo Tịnh</Link></h1>
                    <p className="navBarTagline">Est. 1989 | Thiếu Nhi Thánh Thể | Gương Mẫu</p>
                </header>
                <Link to="/about">Our History</Link>
                <Link to="/team">Meet the Team</Link>
                <Link to="/events">Scheduled Events</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </>
    );
}

export default NavBar;