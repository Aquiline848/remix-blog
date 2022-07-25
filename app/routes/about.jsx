import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <Link to="/">Home</Link>
        </div>
    );
    }