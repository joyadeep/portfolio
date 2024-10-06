"use client";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import { MoveDownRight, AlignLeft } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Navbar = () => {
  useGSAP(()=>{
    gsap.from(document.querySelectorAll(".name"), 
      {
        opacity:0,
        duration:2,
        yoyo:true,
        repeat: -1,
        stagger:0.2
      })
  })
  return (
    <header className="fixed overflow-hidden bg-white dark:bg-black top-0 z-20 flex justify-between items-center w-full px-5 md:px-20 py-3">
      <a
        href="#"
        className=" text-3xl font-bold tracking-tighter text-gray-800 dark:text-white w-fit whitespace-nowrap"
      >
        <span className="name">J</span>
        <span className="name">o</span>
        <span className="name">y</span>
        <span className="name">-</span> 
        <span className="name text-blue-500 relative">A</span>
        <span className="name">-</span>
        <span className="name">d</span> 
        <span className="name">e</span>
        <span className="name">e</span>
        <span className="name">p</span>
      </a>
      <NavigationMenu className=" gap-4 hidden md:flex">
        <NavigationMenuLink href="#works" className="cursor-pointer">
          Works
        </NavigationMenuLink>
        <NavigationMenuLink href="#about" className="cursor-pointer">
          About
        </NavigationMenuLink>
        <NavigationMenuLink href="#services" className="cursor-pointer">
          My Services
        </NavigationMenuLink>
        <NavigationMenuLink
          href="#contact"
          className="flex px-2 py-1 items-center cursor-pointer rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 dark:hover:bg-slate-700  "
        >
          Get in touch <MoveDownRight size={16} className="ml-1" />
        </NavigationMenuLink>
        <ModeToggle />
      </NavigationMenu>

      {/* //for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <AlignLeft className="h-[2rem] w-[2rem]" />
          </SheetTrigger>
          <SheetContent className=" dark:rounded-md dark:shadow-md dark:shadow-white">
            <SheetClose asChild>
              <NavigationMenu className="flex flex-col gap-5 mt-20 items-start text-xl">
                <NavigationMenuLink href="#works" className="cursor-pointer">
                  Works
                </NavigationMenuLink>
                <NavigationMenuLink href="#about" className="cursor-pointer">
                  About
                </NavigationMenuLink>
                <NavigationMenuLink href="#services" className="cursor-pointer">
                  My Services
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#contact"
                  className="flex px-2 py-1 items-center cursor-pointer rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 dark:hover:bg-slate-700  "
                >
                  Get in touch <MoveDownRight size={16} className="ml-1" />
                </NavigationMenuLink>
              </NavigationMenu>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
