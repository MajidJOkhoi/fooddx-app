import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Menu,
  Search,
  Home,
  CircleUser,
  HomeIcon,
  TextSearch,
  SearchX,
  Bot,
} from "lucide-react";
import { LoginContext } from "@/context/LoginContext";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMentalHealthLine } from "react-icons/ri";

const Header = () => {
  const [name, setName] = useState("");
  const[email,setEmail] = useState("");

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setName(parsedUser.name);
      setEmail(parsedUser.email);
    }
  }, []);



  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <RiMentalHealthLine className="w-[30px] h-[30px] "/>
        <span className="md:block text-3xl font-bold text-[#1D212E]">
          <span className="text-red-500 font-bold">Food</span>Dx
        </span>
      </Link>

      <nav className="hidden md:flex gap-6 text-lg font-medium md:text-sm lg:gap-8">
        <Link to="/" className="relative group text-[#1D212E]">
          Home
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>
      
        <Link to="/healthform" className="relative group text-[#1D212E]">
          Health Form
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/chatbot" className="relative group text-[#1D212E]">
          Ai Chat Bot 
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/blog" className="relative group text-[#1D212E]">
          Blog
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/team" className="relative group text-[#1D212E]">
          Team
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>

        <Link to="/about" className="relative group text-[#1D212E]">
          About
          <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
        </Link>
      </nav>

      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>username : {name}</DropdownMenuItem>
            <DropdownMenuItem>email : {email}</DropdownMenuItem>
            {/* <DropdownMenuItem>
              <span className="font-bold">Email: </span>{email}
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <Link to="/auth/login">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Home className="h-6 w-6" />
              <span>Home</span>
            </Link>
            <Link
              to="/imgmodel"
              className="text-muted-foreground hover:text-foreground"
            >
              Img Model
            </Link>
            <Link
              to="/textmodel"
              className="text-muted-foreground hover:text-foreground"
            >
              Ai With Text
            </Link>
            <Link
              to="/healthform"
              className="text-muted-foreground hover:text-foreground"
            >
              Health Form
            </Link>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <Link to="/about" className="relative group text-[#1D212E]">
              About
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
