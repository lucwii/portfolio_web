"use client"
import Image from 'next/image'
import Link from 'next/link'
import ModeToggle from './ModeToggle';
import { Button } from '@/components/ui/button';
import DropDown from './DropDown';
import { useState } from 'react';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const user = null;
  
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'>
      <div className='hidden md:flex flex-row gap-15 ml-20 w-200'>
        <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        <a className='hover:text-blue-500 transition duration-300 font-bold' href='#aboutme'>About Me</a>
        <a className='hover:text-blue-500 transition duration-300 font-bold' href='#projects'>Projects</a>
        <Link className='hover:text-blue-500 transition duration-300 font-bold' href={''}>Links</Link>
      </div>
      
      <div className='hidden md:flex flex-row justify-around w-50'>
        <Button variant={'secondary'}>Contact Me</Button>
        <ModeToggle />
      </div>
      
      {/* Mobile - samo dropdown */}
      <div className='md:hidden w-full flex justify-end gap-3'>
        <DropDown />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header