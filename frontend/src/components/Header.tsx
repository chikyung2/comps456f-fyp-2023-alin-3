import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import './ui/button.css'


export const Header = () => {
    return (
        <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center justify-between gap-4 border-b bg-black px-6 dark:bg-black">
                <nav className="flex flex-col gap-6 text-md font-medium md:items-center md:gap-5 md:text-lg lg:gap-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold text-white">
                        <div className='relative w-9 h-9'>
                            <Image src='/img/ECOchampC.png' alt='EcoChamp' fill />
                        </div>
                        {/* <Package2 className="h-6 w-6" /> */}
                        <span className="">EcoChamp</span>
                    </Link>
                </nav>
                
                {/* <div className="flex-1"></div> */}

                <Button asChild className="ml-auto">
                    <Link href="/recognize">Waste Classify</Link>
                </Button>
            </header>
        </div>
    )
}
