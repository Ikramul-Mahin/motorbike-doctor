import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
	const navItems=[
		{
			title:'Home',
			path:"/"
		},
		{
			title:'About',
			path:"/about"
		},
		{
			title:'Services',
			path:"services"
		},
		{
			title:'Blog',
			path:"/blog"
		},
		{
			title:'Contact',
			path:"/contact"
		},

	]
	return (
		<div className='container mx-auto'>
			<div className="navbar bg-base-100">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
 <Link href='/'>
 <Image
 height={60}
 width={100}
 src='/assets/logo.svg'
 />
 </Link>
  </div>


  <div className="navbar-center items-center  hidden lg:flex">
 
	 {
		navItems.map((item)=> <Link
		className='mx-2 hover:text-primary duration-300 font-semibold'
		key={item.path} href={item.path}>{item.title}</Link>)
	 }
	
  </div>
  <div className="navbar-end">
  <div className='flex items-center space-x-3'>
  <IoMdSearch className='text-xl'/>
  <FaShoppingCart className='text-xl'/>
    <a className="btn btn-primary p-4 btn-outline text-white">Appintment</a>
  </div>
  </div>
</div>
		</div>
	);
};

export default Navbar;