import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { BsPerson } from "react-icons/bs";


const Navbar = () => {

    const { signout, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogout = logoutProvider => {
        logoutProvider()
            .then(result => {
                // toast("Success register!");
                if (result.user) {
                    navigate(from)
                }
            })
    }

    const Navbar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/mycrafts'>My Craft</NavLink></li>
        {
            user && <li><NavLink to='/addcraft'>Add Craft</NavLink></li>
        }
    </>

    return (
        <div className="lg:w-11/12 mx-auto mt-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start relative">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                            {Navbar}
                        </ul>
                    </div>
                    <a className="lg:text-5xl text-lg font-extrabold text-[#ad9773]">Prakritik Shongi</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {Navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className=" relative">
                                <details className="dropdown dropdown-end">
                                    <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                        <div className="w-10 rounded-full tooltip" data-tip={user.displayName}>
                                            <img className="w-10 h-10 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        </div>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32  md:text-lg absolute z-10">
                                        <li className="hover:text-[#f05431da]"><Link>Profile</Link></li>
                                        <li className="hover:text-[#f05431da]" onClick={() => handlesociallogout(signout)}><Link>Logout</Link></li>
                                    </ul>
                                </details>
                                {/* <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="tooltip w-10 rounded-full" data-tip={user.displayName}>
                                            <img className="w-10 h-10 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32">
                                        <li><Link>Profile</Link></li>
                                        <li onClick={() => handlesociallogout(signout)}><Link>Logout</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                            :
                            <div className="relative">
                                <details className="dropdown">
                                    <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                        <div className="p-2 bg-[#f05431da] border-2 rounded-full tooltip" data-tip="Login">
                                            <BsPerson className="text-3xl text-[#FFFFFF]" />
                                        </div>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32 lg:text-lg absolute z-10">
                                        <li><Link to='/login' className=" hover:text-[#f05431da]">Log In</Link></li>
                                        <li><Link to='/register' className="hover:text-[#f05431da]">Register</Link></li>
                                    </ul>
                                </details>
                            </div>
                        // <div>
                        //     <Link to='/login' className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] lg:text-lg mr-5">Log In</Link>
                        //     <Link to='/register' className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] text-lg">Register</Link>
                        // </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;