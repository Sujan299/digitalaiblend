'use client'
import { Icon } from '@iconify/react'
import ButtonOp from './ButtonOp'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className='h-28 shadow-b shadow-lg'>
            <nav className='mx-9 md:mx-28 sm:mx-18  h-28 flex items-center justify-between'>
                <h1 className='text-2xl'>DigitalAiBlend</h1>
                <ul className='gap-3 lg:gap-16 hidden md:flex'>
                    <li>
                        <Link href=''><div class="relative group">
                            <div className='flex'>
                                Categories<span> <Icon icon='mingcute:down-line' className='text-2xl'/></span>
                            </div>
                            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</a>
                            </div>
                        </div></Link>
                    </li>
                    <Link href=''><li>Details</li></Link>
                    <Link href=''><li>About</li></Link>
                    <Link href=''><li>Advertise</li></Link>
                </ul>
                <div className='hidden md:flex'>
                    <button className='bg-gradient-to-r from-yellow-200 to-yellow-500 px-4 py-2 rounded-md'>login</button>
                </div>
                <div className='md:hidden flex'>
                    <ButtonOp />
                </div>
            </nav>
        </div>
    )
}