import { Reducer } from 'redux'
import { SEARCH_QUERY, RELEASES, DispatchTypes } from '../actions/types'

type searcherStateType = {
    searchQuery: string
    releases: []
}

const initialState: searcherStateType = {
    searchQuery: '',
    releases: []
}

export const searcherReducer = (state: searcherStateType = initialState, action: DispatchTypes): searcherStateType => {
    switch (action.type) {
        case SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        case RELEASES:
            return {
                ...state,
                releases: action.payload
            }
        default:
            return state;
    }
}

