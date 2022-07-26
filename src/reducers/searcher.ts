import { Reducer } from 'redux'
import { SEARCH_QUERY, RELEASES, HISTORY, DispatchTypes, ReleasesModel } from '../actions/types'

export type searcherStateType = {
    searchQuery: string;
    releases: ReleasesModel;
    history: string[];
}

const initialState: searcherStateType = {
    searchQuery: '',
    releases: {
        pagination: { pages: 0 },
        results: []
    },
    history: []
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
        case HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}

