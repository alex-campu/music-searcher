import { useState } from 'react'
import style from './SearchBar.module.css'
import { useAppDispatch } from '../../utils/hooks'
import { getMusicReleasesThunk } from '../../actions/index'

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useAppDispatch()

    return (
        <>
            <input placeholder='Search something...' className={style.bar} type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            <button className={style.button} onClick={() => dispatch(getMusicReleasesThunk(searchQuery))}>Go!</button>
        </>
    )
}