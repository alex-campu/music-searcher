import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searcherStateType } from '@/reducers/searcher'
import '../../App.css'
import styles from './History.module.css'

export const History = () => {
    const historyList = useSelector((state: searcherStateType) => state.history)
    return (
        <>
            <h1 className="home-title">History</h1>


            {historyList?.length ?
                <ul className={styles.list}>
                    {historyList.map((item) => (
                        <li>{item}</li>
                    ))
                    }

                </ul>
                :
                <p>No history found, <Link to='/'>search music!</Link></p>
            }
        </>

    )
}
