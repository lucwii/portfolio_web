import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ModeToggle from './ModeToggle';
import { Button } from '@/components/ui/button';

async function Header ()  {
    const user = null;

    return (
        <header
            className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
        >
            <div className='flex flex-row justify-around w-200'>
                <Link href={''}>About Me</Link>
                <Link href={''}>Projects</Link>
                <Link href={''}>Links</Link>
            </div>
            <div className='flex flex-row justify-around w-50'>
                <Button>Contact Me</Button>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header