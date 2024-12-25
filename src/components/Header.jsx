import { Link, NavLink } from "react-router-dom";
import bg from '../../public/more/15.jpg'
import logo from '../../public/more/logo1.png'
import { MdOutlineExpandMore } from "react-icons/md";

const Header = () => {
    return (
        <div>
            <header>
                <div
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    <div className="p-1 lg:flex justify-between mx-2 lg:mx-40">
                        <div className="flex items-center gap-5">
                            <img className="w-16" src={logo} alt="" />
                            <h1 className="text-2xl lg:text-3xl text-white paprika-regular">Espresso Emporium</h1>
                        </div>
                        <div className="flex text-white kanit-black items-center gap-10">
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="" className="m-1 flex items-center"><Link to={'/'}>Home</Link> 
                                <MdOutlineExpandMore className="mr-2 text-2xl"></MdOutlineExpandMore></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow text-black">
                                    <li><Link to={'/'} >Home</Link></li>
                                    <li><Link to={'/coffeeMarket'}>Coffee Market</Link> </li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="" className="m-1 flex items-center">About us 
                                <MdOutlineExpandMore className="mr-2 text-2xl"></MdOutlineExpandMore></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow text-black">
                                    <li><Link to={'/aboutUs'}>About us</Link></li>
                                    <li><Link to={'/FAQ'}>FAQ</Link></li>
                                </ul>
                            </div>
                            <NavLink to={'/users'} >Users</NavLink>
                            <NavLink to={'/signup'} >Sign Up</NavLink>
                            <NavLink to={'/signIn'} >Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;