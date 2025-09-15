import tablesReducer from '@/lib/features/tables/tablesSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => configureStore({
    reducer: {
        tables: tablesReducer
    }
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
