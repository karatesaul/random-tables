import { TableItem } from '@/lib/features/tables/tablesSlice'
import TableCell from './tableCell'

const TableRow = ({ index, item }: { index: number, item: TableItem }) => {
  return (
    <tr>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{item.label}</TableCell>
    </tr>
  )
}

export default TableRow
