'use client'

import { getTables, TableModel } from '@/lib/features/tables/tablesSlice'
import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const Sidenav = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname()
  const tables: Array<TableModel> = useAppSelector(getTables)
  const navItems: ReactNode[] = tables.map((table) => {
    const path = `/tables/${table.id}`
    let className = 'inline-block w-full h-full p-4 hover:bg-background-hover'

    if (path === pathname) {
      className += ' bg-secondary hover:bg-secondary'
    }

    return (
      <li key={table.id}>
        <Link className={className}
          href={path}>
          {table.name}
        </Link>
      </li>
    )
  })

  return (
    <div className='flex flex-col h-full'>
      <header className='w-full bg-primary p-4'>
        <h1 className='text-xl font-bold'>
          <Link href='/'>
            Random Tables
          </Link>
        </h1>
      </header>
      <div className='flex flex-row gap-2 flex-1'>
        <nav className='bg-background-nav flex-none'>
          <ul>
            {navItems}
          </ul>
        </nav>
        <div className=''>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Sidenav
