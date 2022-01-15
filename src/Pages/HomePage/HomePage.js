import { Outlet, Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      <h1>I am a HOME Page Component</h1>
      <Link to="/login">Login--|</Link>
      <Link to="/contests">--Contests--|</Link>
      <Link to="/contests/1">--Single contest--|</Link>
      <Link to="/contests/1/classes">--Classes page--|</Link>
      <Link to="/contests/1/classes/1">--Single class list |</Link>
      <Link to="/contests/1/classes/1/woof">--Woofs exercises |</Link>
      <Link to="/contests/1/classes/1/woof/summary">--Woofs exercises</Link>
      <Outlet />
    </>
  );
};

export default HomePage;
