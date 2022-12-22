import React, { ReactNode } from "react";
import Image from 'next/image'

interface Props {
  children?: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <header className='pl-4 py-2 bg-sky-900 z-50'>
        <Image src="/white-apollo-logo.svg" alt="Apollo Logo" width={100} height={24} priority />
      </header>
      <main {...props}>
        {children}
      </main>
    </>
  )
}