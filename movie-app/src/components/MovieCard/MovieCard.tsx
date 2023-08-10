import { URL_IMAGE } from '../../consts/movies.consts';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import './MovieCard.scss'

interface MovieCardProps {
    title: string;
    image: string;
    date: string;
    id: number;
}

export const MovieCard = ({ title, image, date, id }: MovieCardProps) => {

    const cardImg = URL_IMAGE.concat(image)

    return (
        <>
            <li className='movie-card'>
                <article>
                    <img src={cardImg} className='movie-card__img' alt={title} />
                    <h4>{title}</h4>
                    <span>{date}</span>
                </article>
                <MovieDetail id={id} />
            </li>
        </>
    )
}