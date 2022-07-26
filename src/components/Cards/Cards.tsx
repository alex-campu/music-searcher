import React from 'react'
import styles from './Cards.module.css'

interface MusiCardProps {
    title: string;
    thumb: string;
    genre: string[];
    style: string[];
    year: string;
    country: string;
}

export const MusicCard: React.FC<MusiCardProps> = ({ title, thumb,
    genre,
    style,
    year,
    country
}: MusiCardProps) => {

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

                <p className={styles.info} >{pluralFormatter(genre, 'Genre')}</p>
                <p className={styles.info} >{pluralFormatter(style, 'Style')}</p>

                <p className={styles.info} >Year: {year}</p>
            </div>

        </>
    )
}
