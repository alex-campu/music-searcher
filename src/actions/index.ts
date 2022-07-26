
import { AnyAction, Dispatch } from "redux"
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

export const getMusicReleasesThunk = () => async (dispatch: Dispatch<DispatchTypes>) => {

  try {
    const { data } = await releasesService.get()

    dispatch({
      type: RELEASES,
      payload: data
    })

  } catch (error) {
    console.error(error)
  }

}

