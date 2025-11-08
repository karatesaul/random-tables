'use client'

import { tableAdded } from '@/lib/features/tables/tablesSlice'
import { useAppDispatch } from '@/lib/hooks'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

const AddTablePage = () => {
  const [tableName, setTableName] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTableName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(tableAdded(tableName))
    setTableName('')
    router.push('/')
  }

  return (
    <>
      <h2 className='text-lg font-bold text-center'>Add Table</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='block mx-auto mb-1 p-1 bg-background-input text-foreground-input rounded-sm w-3xs'
          onChange={handleChange}
          value={tableName}
        />
        <button className='block mx-auto bg-primary p-2 rounded-sm'>Add</button>
      </form>
    </>
  )
}

export default AddTablePage
