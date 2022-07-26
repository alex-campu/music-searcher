export const SEARCH_QUERY = 'SEARCH_QUERY'
export const RELEASES = 'RELEASES'

export interface SearchQueryType {
    type: typeof SEARCH_QUERY,
    payload: string
}


export interface ReleasesType {
    type: typeof RELEASES,
    payload: []
}

export type DispatchTypes = SearchQueryType | ReleasesType