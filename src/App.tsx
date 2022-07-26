import { useEffect, useState } from 'react'
import { getMusicReleasesThunk } from './actions'
import { DispatchTypes, ReleaseResults } from './actions/types'
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { MusicCard } from './components/Cards/Cards'
import { useAppDispatch } from './utils/hooks'
import { result } from './utils/mock'
import { useSelector } from 'react-redux'
import { searcherStateType } from 'reducers/searcher'


function App() {
  const dispatch = useAppDispatch()
  const releases = useSelector((state: searcherStateType) => state.releases)
  useEffect(() => {
    // dispatch(getMusicReleasesThunk())
  }, [])

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
      </div>

      <div className="cards-container">
        {releases && releases?.results?.map((item: ReleaseResults) => (
          <>
            {item?.thumb && item?.title &&
              <MusicCard {...item} />

            }
          </>

        ))}
      </div>

    </div>
  )
}

export default App
