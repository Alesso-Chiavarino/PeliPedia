import { useId, useBoolean } from '@fluentui/react-hooks';
import {
    mergeStyleSets,
    FontWeights,
} from '@fluentui/react';
import { IButtonStyles } from '@fluentui/react/lib/Button';
import { MoviesService } from '../services/movies.service';
import { useState, useEffect } from 'react'


export const useModal = (id: number) => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const titleId = useId('title');
    const [movie, setMovie] = useState({
        id: 0,
        overview: '',
        title: '',
        poster_path: '',
        release_date: '',
    })

    const contentStyles = mergeStyleSets({
        container: {
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'stretch',
            maxWidth: '800px',
            height: 'fit-content',
            color: '#fff',
            backgroundColor: '#101010',
            borderRadius: '0.5rem'
        },
        header: [
            {
                flex: '1 1 auto',
                display: 'flex',
                alignItems: 'center',
                fontWeight: FontWeights.semibold,
                padding: '12px 12px 14px 24px',
                fontSize: '1.5em',
            },
        ],
        heading: {
            fontWeight: FontWeights.semibold,
            fontSize: 'inherit',
            margin: '0',
        },
        body: {
            flex: '4 4 auto',
            padding: '0 24px 24px 24px',
            overflowY: 'hidden',
            selectors: {
                p: { margin: '14px 0' },
                'p:first-child': { marginTop: 0 },
                'p:last-child': { marginBottom: 0 },
            },
        },
        image: {
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
        }
    });

    const iconButtonStyles: Partial<IButtonStyles> = {
        root: {
            color: '#fff',
            fontSize: '5em',
            marginLeft: 'auto',
            marginTop: '4px',
            marginRight: '2px',
            backgroundColor: 'red',
        },
        rootHovered: {
            backgroundColor: 'black',
            color: '#fff',
        },
    };

    const moviesService = new MoviesService()

    const fetchMovie = async () => {
        const res = await moviesService.getMovieDetailsById(id)
        setMovie(res)
    }

    useEffect(() => {
        if (isModalOpen) {
            fetchMovie()
        }
    }, [isModalOpen])

    return {
        isModalOpen,
        showModal,
        hideModal,
        titleId,
        contentStyles,
        iconButtonStyles,
        movie
    }

}