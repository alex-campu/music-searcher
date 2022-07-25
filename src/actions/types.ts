export enum ActionEnum {
    SEARCH_QUERY = 'SEARCH_QUERY'
}

export interface ActionType {
    type: ActionEnum,
    payload: string
}