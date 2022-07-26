import { useEffect, useState } from 'react'
import { getMusicReleasesThunk, setHistory } from './actions'
import { DispatchTypes, ReleaseResults, ReleasesModel } from './actions/types'
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { MusicCard } from './components/Cards/Cards'
import { useAppDispatch } from './utils/hooks'
import { result } from './utils/mock'
import { useSelector } from 'react-redux'
import { searcherStateType } from './reducers/searcher'
import { History } from './components/History/History'

const Home: React.FC<ReleasesModel> = ({ results, pagination }: ReleasesModel) => (
  <>
    <h1 className='home-title'>Discogs Music Searcher</h1>
    <div className='search-bar-container'>
      <SearchBar />
    </div>



    <div className='cards-container'>
      {Boolean(results.length) && results?.map((item: ReleaseResults) => (
        <>
          {item?.thumb && item?.title &&
            <MusicCard {...item} />

          }
        </>

      ))}
    </div>  </>

)

export function App() {
  const dispatch = useAppDispatch()
  const releases = useSelector((state: searcherStateType) => state.releases)
  useEffect(() => {
    // dispatch(getMusicReleasesThunk())
    const history = window.localStorage.getItem('history')
    let parsedHistory = [];
    if (history) {
      parsedHistory = JSON.parse(history)
    }
    dispatch(setHistory(parsedHistory))
  }, [])

  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <ul>
              <li><Link to='/home'> Home</Link></li>
              <li><Link to='/history'> History</Link></li>

            </ul>
          </nav>
        </div>


        <Routes>
          <Route path='home' element={<Home {...releases} />} />
          <Route path='history' element={<History />} />
          <Route path='*' element={<Navigate replace to='home' />} />
        </Routes>



      </div>
    </Router>
  )
}

export default App
