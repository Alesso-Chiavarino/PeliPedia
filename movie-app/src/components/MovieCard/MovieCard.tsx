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
                    <div className='movie-card__body'>
                        <h4 className='body__title'>{title}</h4>
                        <span className='body__date'>{date}</span>
                    </div>
                    <MovieDetail id={id} />
                </article>
            </li>
        </>
    )
}