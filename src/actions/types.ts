export const SEARCH_QUERY = 'SEARCH_QUERY'
export const RELEASES = 'RELEASES'
export const HISTORY = 'HISTORY'

export interface SearchQueryType {
    type: typeof SEARCH_QUERY,
    payload: string
}

export interface ReleaseResults {
    title: string;
    thumb: string;
    genre: string[];
    style: string[];
    year: string;
    country: string;
}

export type ReleasesModel = {
    pagination: { [key: string]: number };
    results: ReleaseResults[] | []
}

export interface ReleasesType {
    type: typeof RELEASES,
    payload: ReleasesModel
}

export interface HistoryType {
    type: typeof HISTORY,
    payload: string[]
}

export type DispatchTypes = SearchQueryType | ReleasesType | HistoryType