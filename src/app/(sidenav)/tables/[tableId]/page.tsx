'use client'

import { getTableById, TableItemModel, } from '@/lib/features/tables/tablesSlice'
import { useAppSelector } from '@/lib/hooks'
import { JSX, use } from 'react'

const TablePage = ({ params }: { params: Promise<{ tableId: string }> }) => {
  const { tableId } = use(params)

  const table = useAppSelector(state => getTableById(state, tableId))

  const rows: JSX.Element | JSX.Element[] = table?.items.length ? table.items.map((item: TableItemModel, index: number) => (
    <tr key={item.id}>
      <td className='py-1 px-2 border-1 border-foreground'>{index + 1}</td>
      <td className='py-1 px-2 border-1 border-foreground'>{item.label}</td>
    </tr>
  )) : (
    <tr>
      <td className='py-1 px-2 border-1 border-foreground' colSpan={2}>
        No items
      </td>
    </tr>
  )

  return (
    <table className='border-collapse'>
      <thead>
        <tr>
          <th className='border-1 border-foreground'></th>
          <th className='border-1 border-foreground'>Item</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
export default TablePage
