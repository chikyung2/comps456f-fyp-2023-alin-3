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
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold text-white">
                        <div className='relative w-9 h-9'>
                            <Image src='/img/ECOchampC.png' alt='EcoChamp' fill />
                        </div>
                        {/* <Package2 className="h-6 w-6" /> */}
                        <span className="">EcoChamp</span>
                    </Link>
                    <Button asChild className="cta ml-auto">
                        <Link href="/image-recognition">Waste Classify</Link>
                    </Button>

                </nav>

                <div className="flex-col gap-6 text-md font-medium md:hidden md:flex-row md:items-center md:gap-5 md:text-sm">
                    <Link href="/" className="flex items-center gap-2 text-md font-semibold text-white">
                        <div className='relative w-9 h-9'>
                            <Image src='/img/ECOchampC.png' alt='EcoChamp' fill />
                        </div>
                        {/* <Package2 className="h-6 w-6" /> */}
                        <span className="">EcoChamp</span>
                    </Link>
                </div>
                <div className="flex-1"></div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link href="/recognize" className="hover:text-foreground">
                                Waste Classify
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    )
}
