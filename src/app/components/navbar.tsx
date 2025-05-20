'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-50'>
            <div className='flex justify-around container mx-auto py-6 px-20'>
                <div className='flex items-center gap-3'>
                    <Image
                        src="/pfp.png" 
                        alt="profilePic"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover object-center"    
                    />
                    <h2 className="text-lg font-semibold">VVS Basanth Pedapati</h2>
                </div>
                <ul className="flex gap-8 text-base font-bold items-center">
                    <button className="px-3 py-2 rounded-md bg-white hover:bg-gray-200 transition-colors"><li><Link href="/">About Me</Link></li></button>
                    <button className="px-3 py-2 rounded-md bg-white hover:bg-gray-200 transition-colors"><li><Link href="/skills">Skills</Link></li></button>
                    <button className="px-3 py-2 rounded-md bg-white hover:bg-gray-200 transition-colors"><li><Link href="/project">Project</Link></li></button>
                    <button className="px-3 py-2 rounded-md bg-white hover:bg-gray-200 transition-colors"><li><Link href="/contact">Contact Me</Link></li></button>
                </ul>
                <ul className="">
                    <li>
                        <button>
                            <Link 
                                href="/resume" 
                                download
                                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Resume
                                {/* Download SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}