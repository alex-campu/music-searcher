import { Reducer } from 'redux'
import { ActionEnum, ActionType } from '../actions/types'

const { SEARCH_QUERY } = ActionEnum

type searcherStateType = {
    searchQuery: string
}

const initialState: searcherStateType = {
    searchQuery: '',
}

export const searcherReducer = (state: searcherStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}