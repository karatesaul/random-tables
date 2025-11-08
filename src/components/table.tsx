import { TableModel } from '@/lib/features/tables/tablesSlice'
import TableRow from './tableRow'

const Table = ({ table }: { table: TableModel }) => {
  const rows = table.items.length ? table.items.map((item, index) => (
    <TableRow
      index={index}
      item={item}
      key={item.id}>
    </TableRow>
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

export default Table
