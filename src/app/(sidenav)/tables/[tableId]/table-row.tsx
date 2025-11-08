import { TableItemModel } from '@/lib/features/tables/tablesSlice'
import TableCell from './table-cell'

const TableRow = ({ index, item }: { index: number, item: TableItemModel }) => {
  return (
    <tr>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{item.label}</TableCell>
    </tr>
  )
}

export default TableRow
