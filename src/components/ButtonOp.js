'use client'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Link from 'next/link'
export default function Button() {
    const [navOpen, setNavOpen] = useState(false)
    function showNav() {
        if (navOpen === false) {
            setNavOpen(true)
        }
        else {
            setNavOpen(false)
        }
    }
    return (
        <div>
            <button onClick={showNav}>
                {navOpen ? <Icon icon='gridicons:cross' className='text-5xl' /> : <Icon icon='ion:menu-outline' className='text-5xl' />}
            </button>
            {navOpen ?
                <div className='h-screen bg-white fixed top-28 w-screen left-0'>
                    <nav className=''>
                        <ul className='flex flex-col fixed top-36 gap-9 inset-0 mx-auto w-max'>
                            <li>
                                <Link href=''><div class="relative group">
                                    <div className='flex'>
                                        Categories<span> <Icon icon='mingcute:down-line' className='text-2xl' /></span>
                                    </div>
                                    <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</a>
                                    </div>
                                </div></Link>
                            </li>
                            <li>Details</li>
                            <li>About</li>
                            <li>Advertise</li>
                            <li>
                                <div className='flex'>
                                    <button className='bg-gradient-to-r from-yellow-200 to-yellow-500 px-4 py-2 rounded-md'>login</button>
                                </div>
                            </li>
                        </ul>

                    </nav>
                </div> : null}
        </div>
    )
}