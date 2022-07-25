import { Link} from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Remix is fun yeeeh!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/posts/">posts</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/posts/create">Create Post</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}
