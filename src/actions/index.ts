
import { Dispatch } from "redux"
import { releasesService } from "../services"
import { SEARCH_QUERY, RELEASES, HISTORY, DispatchTypes, HistoryType, ReleasesType, ReleasesModel } from "./types"

export const searchMusic = (payload: string) => ({
  type: SEARCH_QUERY,
  payload
})

export const setReleases = (payload: ReleasesModel): ReleasesType => ({
  type: RELEASES,
  payload
})

export const setHistory = (payload: string[]): HistoryType => ({
  type: HISTORY,
  payload
})

export const getMusicReleasesThunk = (query: string) => async (dispatch: Dispatch<DispatchTypes>) => {

  const saveToHistory = () => {
    const oldHistory = window.localStorage.getItem('history')
    let parsedHistory = [];
    if (oldHistory) {
      parsedHistory = JSON.parse(oldHistory)
    }
    const date = new Date().toDateString()
    const time = new Date().toLocaleTimeString()

    const newHistory = parsedHistory.concat([`${query} - ${date} ${time}`])

    dispatch(setHistory(newHistory))
    window.localStorage.setItem('history', JSON.stringify(newHistory))
  }

  try {
    const { data } = await releasesService.get(query)

    saveToHistory()

    dispatch(setReleases(data))


  } catch (error) {
    console.error(error)
  }

}

