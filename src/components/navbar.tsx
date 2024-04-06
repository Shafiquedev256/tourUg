import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-5 py-4 text-white font-bold  bg-[#007500] sticky  z-20 w-screen top-0'>
      <Link to='/' className='text-2xl'>
        Uganda Tours
      </Link>
      <div className='hidden md:flex md:flex-row md:items-center text-gray-100 md:space-x-4'>
        <Link to='/' className='hover:text-white'>
          Popular Sites
        </Link>
        <Link to='/' className='hover:text-white'>
          Account
        </Link>
        <Link to='/' className='hover:text-white'>
          Packages
        </Link>
      </div>
    </div>
  );
};
