import { ActionButton, SearchBox, ISearchBoxStyles, IButtonStyles, Stack } from '@fluentui/react'
import type { HandleInputSearch, HandleSubmit } from '../../types/Form';

interface InputSearchProps {
    handleSubmit: (e: HandleSubmit) => void;
    handleInputSearch: (e: HandleInputSearch) => void;
}

export const InputSearch = ({ handleSubmit, handleInputSearch }: InputSearchProps) => {

    const searchBoxStyles: Partial<ISearchBoxStyles> = {
        root: {
            width: '100%',
            color: '#fff',
            backgroundColor: '#27272A',
            textOverlineColor: '#fff',
            outline: 'none',
            border: 'none',
            height: '40px',
            selectors: {
                '::after': {
                    border: '1px solid #ccc',
                },
            }
        },
        field: {
            borderColor: 'red',
            color: '#fff',
            '::placeholder': {
                color: '#909497',
            },
        },
        icon: {
            color: '#fff',
        }
    };

    const buttonStyles: IButtonStyles = {
        root: {
            backgroundColor: '#707B7C',
            color: 'white',
            border: 'none',
            selectors: {
                ':hover': {
                    backgroundColor: '#99A3A4 ',
                },
            },
        },
        icon: {
            color: 'white',
        },
        iconHovered: {
            color: 'white',
        },
    };


    return (
        <form className='form' style={{ width: '40%', height: '40px' }} onSubmit={handleSubmit}>
            <Stack
                horizontal
                verticalAlign="center"
                tokens={{ childrenGap: 10 }}
            >
                <SearchBox
                    styles={searchBoxStyles}
                    onChange={handleInputSearch}
                    placeholder='Vengadores, Barbie, ...'
                />

                <ActionButton
                    iconProps={{ iconName: 'Search' }}
                    ariaLabel="Buscar"
                    type='submit'
                    styles={buttonStyles}
                    style={{ color: 'white' }}
                >Buscar</ActionButton>
            </Stack>
        </form>
    )
}