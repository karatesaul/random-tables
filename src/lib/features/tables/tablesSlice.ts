import { createSlice } from '@reduxjs/toolkit'

export type TableModel = {
  id: string
  name: string
  items: Array<TableItemModel>
}

export type TableItemModel = {
  id: string
  label: string
}

export type TablesState = TableModel[]

const initialState: TablesState = [{
  id: '0',
  name: 'Kata',
  items: [{
    id: '0',
    label: 'Naihanchi Shodan'
  }, {
    id: '1',
    label: 'Naihanchi Nidan'
  }]
}, {
  id: '1',
  name: 'Random Encounters',
  items: []
}]

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
  selectors: {
    getTables: state => state,
    getTableById: (state, tableId: string) => state.find(table => table.id === tableId)
  }
})

export default tablesSlice.reducer

export const { getTables, getTableById } = tablesSlice.selectors
