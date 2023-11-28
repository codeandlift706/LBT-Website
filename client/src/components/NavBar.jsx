// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom'; //useLocation is a hook that will return to us the location object

function NavBar() {
    return (
        <>
            <nav className="navBar">
                <header className="navHeader">
                    <h1 className="navBarHeading">Đoàn Lê Bảo Tịnh</h1>
                    {/* <p className="navBarTagline">Est. 1989 | Thiếu Nhi Thánh Thể | Gương Mẫu</p> */}
                </header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    );
}

export default NavBar;