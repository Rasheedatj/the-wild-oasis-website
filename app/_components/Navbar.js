import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-[70%]'>
      <ul className='flex items-center gap-10 list-none *:hover-text-red-400 '>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/cabins'>Cabins</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/account'>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
