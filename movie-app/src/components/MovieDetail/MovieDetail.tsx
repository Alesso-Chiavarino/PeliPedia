import { Modal } from '@fluentui/react';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { useModal } from '../../hooks/useModal';
import { URL_IMAGE } from '../../consts/movies.consts';

interface MovieDetailProps {
    id: number;
}

export const MovieDetail = ({ id }: MovieDetailProps) => {

    const { contentStyles, hideModal, iconButtonStyles, isModalOpen, showModal, titleId,
        movie: { overview, poster_path, release_date, title } } = useModal(id)

    const image = URL_IMAGE.concat(poster_path)

    return (
        <div>
            <DefaultButton onClick={showModal} text="Open Modal" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                    <h2 className={contentStyles.heading} id={titleId}>
                        Movie Details
                    </h2>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={{ iconName: 'Cancel' }}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>
                <div className={contentStyles.body}>
                    <img className={contentStyles.image} src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{overview}</p>
                    <span>{release_date}</span>
                </div>
            </Modal>
        </div>
    );
};
