'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

function Header() {
    const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
    console.log(isDarkTheme, toggleThemeHandler)

    return (
        <header>
            <section className='flex flex-wrap items-center px-3 rounded bg-cyan-50 dark:bg-cyan-900 dark:text-white'>
                <Link href='/' className='inline-flex items-center px-2 mr-4'>
                    <Image
                        src="/assets/logo3.png"
                        width={90}
                        height={50}
                        alt="Pet Shop Logo"
                    />
                    <span className='text-xl font-bold tracking-wide text-black uppercase'>
                        Pets Shop
                    </span>

                </Link>
                <section className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <nav className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white '>

                            Home

                        </Link>
                        <Link href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white'>

                            Services

                        </Link>
                        <Link href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white'>

                            About us

                        </Link>
                        <Link href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white'>

                            Contact us

                        </Link>
                        <button
                            type="button"
                            className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
                            onClick={toggleThemeHandler}
                        >
                            Toggle Theme
                        </button>
                    </nav>
                </section>
            </section>
        </header>
    )
}

export default Header