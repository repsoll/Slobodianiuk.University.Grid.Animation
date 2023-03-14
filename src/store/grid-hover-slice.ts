import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './root-store';

interface IGridHoverState {
    hoverItemKey: string;
}

const initialState: IGridHoverState = {
    hoverItemKey: '',
};

export const gridHoverSlice = createSlice({
    name: 'grid-hover',
    initialState,
    reducers: {
        updateHover: (state, action: PayloadAction<string | undefined>) => {
            state.hoverItemKey = action.payload ?? '';
        },
        removeHoverForCurrentItem: (state, action: PayloadAction<string | undefined>) => {
            if (action.payload === state.hoverItemKey) {
                state.hoverItemKey = '';
            }
        },
        removeHover: (state) => {
            state.hoverItemKey = '';
        },
    },
})

export const selectIsHovering = (state: RootState, key?: string) => state.gridHover.hoverItemKey === key;

export const { updateHover, removeHoverForCurrentItem, removeHover } = gridHoverSlice.actions
export const gridHoverSliceReducer = gridHoverSlice.reducer