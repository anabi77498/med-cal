'use client'
import {useEffect, useState} from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import  ToggleNavBar from "@/components/ToggleNavBar";
import Link from "next/link";


interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#steps",
        label: "How it Works",
    },
    {
        href: "#stripe",
        label: "Stripe",
    },
];

export default function Navbar () {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    // Ensure that the component doesn't render until it's mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevent server-rendered content that can cause hydration issues
    }

    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="ml-2 font-bold text-xl flex"
                        >
                            MedCal
                        </Link>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">

            <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                    className="flex md:hidden h-5 w-5"
                    onClick={() => setIsOpen(true)}
                >
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
                  {routeList.map(({ href, label }: RouteProps) => (
                      <a
                          rel="noreferrer noopener"
                          key={label}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={buttonVariants({ variant: "ghost" })}
                      >
                          {label}
                      </a>
                  ))}
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                        target="_blank"
                        className={`w-[110px] border ${buttonVariants({
                            variant: "secondary",
                        })}`}
                    >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <Link
                            href="/login"
                            className={`border ${buttonVariants({ variant: "secondary" })}`}
                        >
                            Signup
                        </Link>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};