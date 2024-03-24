import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'


export const Header = () => {
    return (
        <div className="flex flex-col">
            <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <div className='relative w-6 h-6'>
                            <Image src='/img/ECOchampC.png' alt='EcoChamp' fill />
                        </div>
                        {/* <Package2 className="h-6 w-6" /> */}
                        <span className="">EcoChamp</span>
                    </Link>
                    <Link
                        href="/image-recognition"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Classify
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Upload
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Info
                    </Link>
                </nav>

                <div className="flex-col gap-6 text-md font-medium md:hidden md:flex-row md:items-center md:gap-5 md:text-sm">
                    <Link href="/" className="flex items-center gap-2 text-md font-semibold">
                        <div className='relative w-6 h-6'>
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
                            <Link href="#" className="hover:text-foreground">
                                Classify
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Upload
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Info
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    )
}
