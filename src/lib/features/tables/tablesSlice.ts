import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

export type TableModel = {
  id: string
  name: string
  items: Array<TableItemModel>
}

export type TableItemModel = {
  id: string
  label: string
}

export type TableItemPayload = {
  tableId: string,
  item: TableItemModel
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
  reducers: {
    tableAdded: {
      reducer: (state, action: PayloadAction<TableModel>) => {
        state.push(action.payload)
      },
      prepare: (name: string) => ({
        payload: {
          id: nanoid(),
          name,
          items: []
        }
      })
    },
    tableItemAdded: {
      reducer: (state, action: PayloadAction<TableItemPayload>) => {
        const table = state.find(table => table.id === action.payload.tableId)
        table?.items.push(action.payload.item)
      },
      prepare: (tableId: string, label: string) => ({
        payload: {
          tableId,
          item: {
            id: nanoid(),
            label
          }
        }
      })
    }
  },
  selectors: {
    getTables: state => state,
    getTableById: (state, tableId: string) => state.find(table => table.id === tableId)
  }
})

export default tablesSlice.reducer

export const { tableAdded, tableItemAdded } = tablesSlice.actions

export const { getTables, getTableById } = tablesSlice.selectors
