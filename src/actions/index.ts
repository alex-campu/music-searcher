
import { Dispatch } from "redux"
import { releasesService } from "../services"
import { SEARCH_QUERY, RELEASES, DispatchTypes } from "./types"

export const searchMoovies = (payload: string) => ({
  type: SEARCH_QUERY,
  payload
})

export const setReleases = (payload: []) => ({
  type: RELEASES,
  payload
})

export const getMusicReleasesThunk = (query: string) => async (dispatch: Dispatch<DispatchTypes>) => {

  try {
    const { data } = await releasesService.get(query)

    dispatch({
      type: RELEASES,
      payload: data
    })


  } catch (error) {
    console.error(error)
  }

}

