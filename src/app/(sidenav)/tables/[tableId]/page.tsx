'use client'

import Table from '@/app/(sidenav)/tables/[tableId]/table'
import { getTableById } from '@/lib/features/tables/tablesSlice'
import { useAppSelector } from '@/lib/hooks'
import { use } from 'react'

const TablePage = ({ params }: { params: Promise<{ tableId: string }> }) => {
  const { tableId } = use(params)

  const table = useAppSelector(state => getTableById(state, tableId))

  if (!table) return

  return <Table table={table}></Table>
}
export default TablePage
