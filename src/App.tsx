import { useEffect, useState } from 'react'
import { getMusicReleasesThunk } from './actions'
import { DispatchTypes } from './actions/types'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { useAppDispatch } from './utils/hooks'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMusicReleasesThunk())
  }, [])

  return (
    <div className="App">
      <SearchBar />

    </div>
  )
}

export default App
