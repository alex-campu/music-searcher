import { useEffect, useState } from 'react'
import { getMusicReleasesThunk } from './actions'
import { DispatchTypes } from './actions/types'
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { MusicCard } from './components/Cards/Cards'
import { useAppDispatch } from './utils/hooks'
import { result } from './utils/mock'


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMusicReleasesThunk())
  }, [])

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
      </div>

      <div className="cards-container">
        <MusicCard {...result} />
      </div>

    </div>
  )
}

export default App
