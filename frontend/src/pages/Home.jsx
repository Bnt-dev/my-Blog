import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>My Ninja blog</h1>
      <div>
        <Link to="/api/admin">Administration</Link>
        <Link to="/AllNinjas">Let's go</Link>
      </div>
    </section>
  );
}
