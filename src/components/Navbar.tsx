"use client";

import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPencilSquare, BsFillPersonFill } from "react-icons/bs";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const RoundedIcon = ({
  children,
  href,
  setIsOpen,
}: {
  children: React.ReactNode;
  href: string;
  setIsOpen: (arg1: boolean) => void;
}) => {
  return (
    <Link
      href={href}
      className='p-2 rounded-full border-2 hover:text-yellow-200'
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full fixed flex items-center gap-8 flex-col'>
      {isOpen ? (
        <BiUpArrow size={32} onClick={toggleOpen} className='cursor-pointer' />
      ) : (
        <BiDownArrow size={32} color='gray' onClick={toggleOpen} className='cursor-pointer' />
      )}
      {isOpen && (
        <div className='flex gap-8 bg-gray-700 text-white p-1 rounded-full'>
          <RoundedIcon href='/' setIsOpen={setIsOpen}>
            <AiFillHome size={24} />
          </RoundedIcon>
          <RoundedIcon href='/write' setIsOpen={setIsOpen}>
            <BsPencilSquare size={24} />
          </RoundedIcon>
          <RoundedIcon href='/profile' setIsOpen={setIsOpen}>
            <BsFillPersonFill size={24} />
          </RoundedIcon>
          <span className='p-2 rounded-full border-2 flex justify-center ite hover:text-yellow-200'>
            <ThemeToggle />
          </span>
        </div>
      )}
    </div>
  );
}
