import Link from "next/link";
import React, { ReactNode } from "react";
import SideNav from "../side-nav/side-nav";
import { BsChevronLeft } from 'react-icons/bs'

interface Props {
  children?: ReactNode;
}

export default function LayoutWithSidebar({ children, ...props }: Props) {
  return (
    <>
      <header className='flex align-middle pl-4 py-2 bg-sky-900 text-white text-lg font-semibold fixed top-0 left-0 right-0 md:relative z-50'>
        <Link href='/' className="flex align-middle mr-2"><BsChevronLeft className="inline" /></Link>
        Bid Optimization
      </header>
      <main>
        <section className='hidden lg:block w-60 shadow-md h-full bg-white px-1 absolute'>
          <SideNav />
        </section>
        <div className='lg:ml-60 mt-10 md:mt-0' {...props}>
          {children}
        </div>
      </main>
    </>
  )
}