import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import CommentListItemProps from "../interfaces/CommentListItemProps";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        addComment: (state: CommentListItemProps[], action: PayloadAction<CommentListItemProps>) => {
            state.push(action.payload);
        },
        removeComment: (state: CommentListItemProps[], action: PayloadAction<CommentListItemProps>) => {
            const index = state.findIndex((comment) => comment.path === action.payload.path);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    },
});

export const {addComment, removeComment} = commentsSlice.actions;

const listItems = createSlice({
    name: "listItems",
    initialState: [],
    reducers: {
        addListItem: (state: CommentListItemProps[], action: PayloadAction<CommentListItemProps>) => {
            state.push(action.payload);
        },
        removeListItem: (state: CommentListItemProps[], action: PayloadAction<CommentListItemProps>) => {
            const index = state.findIndex((listItem) => listItem.path === action.payload.path);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    },
});

export const {addListItem, removeListItem} = listItems.actions;


export const commentsStore = configureStore({
    reducer: {
        comments: commentsSlice.reducer,
        listItems: listItems.reducer
    }
});

export type RootState = ReturnType<typeof commentsStore.getState>;
export type AppDispatch = typeof commentsStore.dispatch;