
import { ActionEnum } from "./types"

const { SEARCH_QUERY } = ActionEnum

export const searchMoovies = (payload: string) => ({
    type: SEARCH_QUERY,
    payload
})