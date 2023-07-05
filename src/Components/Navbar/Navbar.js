import './Navbar.css'
import logo from '../../Images/logo.svg'
import FilterDrawer from './FilterDrawer/FilterDrawer';
const Navbar = () => {
    return ( 
        <div className='myNav'>
            <div className="navLeft">
                <img src={logo} alt="" />
            </div>
            <div className="navRight">
                <FilterDrawer/>
            </div>
        </div>
    );
}
export default Navbar;