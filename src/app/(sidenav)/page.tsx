'use client'

import { getTables } from '@/lib/features/tables/tablesSlice'
import { useAppSelector } from '@/lib/hooks'
import HomeTableItem from './home-table-item'

const HomePage = () => {
  const tables = useAppSelector(state => getTables(state))

  const tableItems = tables.map(table => (
    <HomeTableItem key={table.id} table={table}></HomeTableItem>
  ))

  return (
    <div className='w-full flex flex-col items-center gap-2'>
      {tableItems}
    </div>
  )
}
export default HomePage
