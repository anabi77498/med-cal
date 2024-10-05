'use client'
import {useState} from "react";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu"
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ToggleNavBar from "@/components/ToggleNavBar";
import {Menu} from "lucide-react";


interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];
export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(
        <>
            <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
                <NavigationMenu className="mx-auto">
                    <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
                        <Link href="/">
                            {/* Insert Logo*/}
                            <Image
                                className="dark:invert"
                                src="https://nextjs.org/icons/next.svg"
                                alt="Next.js logo"
                                width={180}
                                height={38}
                                priority
                            />
                        </Link>

                        {/* Mobile Sheet*/}
                        <span className="flex md:hidden">
                            <ToggleNavBar/>

                            <Sheet open={isOpen} onOpenChange={setIsOpen(!isOpen)}>
                                <SheetTrigger className="px-2">
                                    <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                                        <span className="sr-only">Menu Icon</span>
                                    </Menu>
                                </SheetTrigger>

                                <SheetContent side={"left"}>
                                    <SheetHeader>
                                        <SheetTitle className="font-bold text-xl">
                                            MedCal
                                        </SheetTitle>
                                    </SheetHeader>
                                    <nav className="flex flex-col justify-center items-center gap-2 mt-4">

                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </span>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>
    )
}