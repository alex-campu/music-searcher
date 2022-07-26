import { ReleaseResults } from '@/actions/types';
import React from 'react'
import styles from './Cards.module.css'

export const MusicCard: React.FC<ReleaseResults> = ({ title, thumb,
    genre,
    style,
    year,
    country
}: ReleaseResults) => {

    const pluralFormatter = (input: string[], label: string) => {
        const labelTitle = input.length > 1 ? `${label}s` : label
        const inputString = input.join(", ")
        return `${labelTitle}: ${inputString}`
    }


    return (
        <>
            <div className={styles.musiscCardBorder}>

                <p className={styles.title}>{title}</p>

                <img className={styles.picture} src={thumb} />

                {genre &&
                    <p className={styles.info} >{pluralFormatter(genre, 'Genre')}</p>

                }
                {style &&
                    <p className={styles.info} >{pluralFormatter(style, 'Style')}</p>
                }

                {year &&
                    <p className={styles.info} >Year: {year}</p>
                }

                {!genre && !style && !year && <p>No Information Available</p>}
            </div>

        </>
    )
}
