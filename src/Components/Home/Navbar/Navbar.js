import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="mid-container">
            <div class="navbar px-0 lg:py-4">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='mb-2 px-0'><Link to='/'>Home</Link></li>
                            <li className='mb-2 px-0'><Link to='/'>About</Link></li>
                            <li className='mb-2 px-0'><Link to='/'>Departments</Link></li>
                            <li className='mb-2 px-0'><Link to='/'>Pages</Link></li>
                            <li className='mb-2 px-0'><Link to='/'>Blog</Link></li>
                            <li className='mb-2 px-0'><Link to='/'>Contact</Link></li>
                            <Link to='/' ><button className='btn btn-primary lg:px-5 btn-sm mb-3 capitalize'>Free Consultation</button> </Link>
                        </ul>
                    </div>
                    <Link to='/' className='text-2xl font-bold'><span className='text-primary'>Doc</span><span className='text-secondary'>Mic.</span></Link>
                </div>
                <div className='navbar-end'>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li className='mr-2 px-0'><Link to='/'>Home</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>About</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Departments</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Pages</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Blog</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Contact</Link></li>
                            <Link to='/' ><button className='btn btn-primary lg:px-5 capitalize ml-16'>Free Consultation</button> </Link>
                        </ul>

                    </div>
                    <div class="">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;