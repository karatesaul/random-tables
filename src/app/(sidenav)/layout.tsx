'use client'

import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import SideNav from './side-nav'

const SideNavLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  const handleClick = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }

  return (
    <div className='flex flex-col h-full'>
      <header className='w-full bg-primary p-4 flex gap-3'>
        <button
          onClick={handleClick}
          title='Show/hide side menu'>
          <Bars3Icon className='size-6'></Bars3Icon>
        </button>
        <h1 className='text-xl font-bold'>
          <Link href='/'>
            Random Tables
          </Link>
        </h1>
      </header>
      <div className='flex flex-row flex-1'>
        <SideNav isSideNavOpen={isSideNavOpen}></SideNav>
        <div className='w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default SideNavLayout
