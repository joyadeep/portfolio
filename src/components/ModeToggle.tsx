"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

 
export function ModeToggle() {
  const { setTheme } = useTheme()
  
 
  return (
        <Button className="bg-transparent border-0 outline-none cursor-default" variant="link" size="icon">
          <Sun onClick={() => setTheme("dark")} className=" cursor-pointer h-[2rem] w-[2rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon onClick={() => setTheme("light")} className=" cursor-pointer absolute h-[2rem] w-[2rem] md:h-[1.2rem] md:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}