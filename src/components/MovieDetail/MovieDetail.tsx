import { Modal } from '@fluentui/react';
import { DefaultButton, IconButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { useModal } from '../../hooks/useModal';
import { URL_IMAGE } from '../../consts/movies.consts';
import { Loader } from '../Loader/Loader';
import { useAppSelector } from '../../hooks/store';

interface MovieDetailProps {
    id: number;
}

export const MovieDetail = ({ id }: MovieDetailProps) => {

    const { contentStyles, hideModal, iconButtonStyles, isModalOpen, showModal, titleId, isLoading,
        movie: { overview, poster_path, release_date, title, genres } } = useModal(id)

    const image = URL_IMAGE.concat(poster_path)

    const buttonStyles: Partial<IButtonStyles> = {
        root: {
            width: '100%',
            backgroundColor: '#27272A',
            border: 'none',
            color: '#fff',
        },
    };

    const error = useAppSelector(state => state.errors)

    const hasDetails = overview && poster_path && release_date && title && genres

    return (
        <div>
            <DefaultButton styles={buttonStyles} onClick={showModal} text="Detalles" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                    <h2 className={contentStyles.heading} id={titleId}>Detalles de la película</h2>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={{ iconName: 'Cancel' }}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>
                <div className={contentStyles.body}>

                    {(isLoading || (!hasDetails && !isLoading)) && (
                        <span>{isLoading ? <Loader /> : <h3>{error.message}</h3>}</span>
                    )}

                    {/* {isLoading && <div>Loading...</div>} */}

                    <img className={contentStyles.image} src={image} alt={title} />
                    <h3>{title}</h3>
                    <hr />
                    <p>{overview}</p>
                    <div className={contentStyles.data}>
                        <span>{release_date}</span>

                        {!isLoading && <span >Géneros: {genres.map(genre => {
                            return <span key={genre.id}>{genre.name} </span>
                        })}</span>}

                    </div>
                </div>
            </Modal>
        </div>
    );
};
