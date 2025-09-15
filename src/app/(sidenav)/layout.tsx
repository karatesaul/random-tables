'use client'

import { getTables, TableModel } from '@/lib/features/tables/tablesSlice'
import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import { ReactNode } from 'react'

const Sidenav = ({ children }: Readonly<{ children: ReactNode }>) => {
  const tables: Array<TableModel> = useAppSelector(getTables)
  const navItems: ReactNode[] = tables.map((table) => (
    <li key={table.id}>
      <Link href={`/tables/${table.id}`}>{table.name}</Link>
    </li>
  ))

  return (
    <>
      <header>
        <h1 className="text-xl mb-4">Random Tables</h1>
      </header>
      <div className='flex flex-row gap-2'>
        <nav className='flex-none'>
          <ul>
            {navItems}
          </ul>
        </nav>
        {children}
      </div>
    </>
  )
}
export default Sidenav
