import { useState } from 'react'
import style from './SearchBar.module.css'
import { useAppDispatch } from '../../utils/hooks'
import { getMusicReleasesThunk } from '../../actions/index'

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useAppDispatch()

    const handleSearch = () => {
        dispatch(getMusicReleasesThunk(searchQuery))
    }
    return (
        <>
            <input placeholder='Search by artist, album, etc...' className={style.bar} type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            <button className={style.button} onClick={handleSearch}>Go!</button>
        </>
    )
}