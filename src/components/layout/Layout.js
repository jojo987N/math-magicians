import { NavLink, Outlet } from 'react-router-dom';
import './layout.scss';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <h1>Math Magicians</h1>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="calculator">Calculator</NavLink></li>
            <li><NavLink to="quote">Quote</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
