import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"


export const Header = () => {
    return (
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
                    href="#"
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
        </header>
    )
}
