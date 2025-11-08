import { ReactNode } from 'react'

const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className='py-1 px-2 border-1 border-foreground'>{children}</td>
}

export default TableCell
