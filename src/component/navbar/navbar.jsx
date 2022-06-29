import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = ()=>{
    return <div className="navbar_contain py-2 shadow border">

  <div className="container d-flex justify-content-between align-items-center">
  <h3>LOGO</h3>
<ul className="d-flex mt-2 nav_links justify-content-between">
    <li ><Link className='text-primary' to="/">HOME</Link></li>
    <li><Link className='text-primary' to="/about">ABOUT</Link></li>
    <li><Link className='text-primary' to="/store">STORE</Link></li>
    <li><Link className='text-primary' to="/counter">COUNTER</Link></li>
</ul>
  </div>
    </div>
}
export default Navbar;