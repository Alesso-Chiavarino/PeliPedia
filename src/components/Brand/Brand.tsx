import './Brand.scss'
import { FontIcon } from '@fluentui/react/lib/Icon';

export const Brand = () => {

    return (
        <div className='brand'>
            <FontIcon className='brand__icon' aria-label="Movie" role='img' iconName="MyMoviesTV" />
            <h1 className="brand__name">PeliPedia</h1>
        </div>
    )
}