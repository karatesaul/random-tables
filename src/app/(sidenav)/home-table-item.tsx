import { TableModel } from '@/lib/features/tables/tablesSlice'
import Link from 'next/link'

const HomeTableItem = ({ table }: { table: TableModel }) => {
  return (
    <Link
      className={'bg-secondary w-3xs md:w-md rounded-md p-3 text-center'}
      href={`/tables/${table.id}`}>
      {table.name}
    </Link>
  )
}

export default HomeTableItem
