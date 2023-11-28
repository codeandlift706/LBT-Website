// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section id="home">
                <section className="homeContainer">
                    <h2 className="homeHeading">We are here to serve.</h2>
                </section>
            </section>
        </>
    );
}