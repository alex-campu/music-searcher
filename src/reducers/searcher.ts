import { Reducer } from 'redux'
import { SEARCH_QUERY, RELEASES, DispatchTypes, ReleasesModel } from '../actions/types'

export type searcherStateType = {
    searchQuery: string
    releases: ReleasesModel
}

const initialState: searcherStateType = {
    searchQuery: '',
    releases: {
        pagination: { pages: 0 },
        results: []
    }
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

