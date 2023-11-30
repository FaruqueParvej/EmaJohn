
import { Link } from 'react-router-dom';
import logo from '../../public/images/Logo.svg'
const Navbar = () => {
    return (
        <div className="navbar bg-black text-white ">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Order</Link></li>
      <li><Link to='Order-Review'>Order Review</Link></li>
      <li><Link to='Manage-Inventory'> Manage Inventory</Link></li>
      <li><Link to='login'>Login</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;