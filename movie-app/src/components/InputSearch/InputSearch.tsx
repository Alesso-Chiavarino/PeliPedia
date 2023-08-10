import { ActionButton, SearchBox, ISearchBoxStyles } from '@fluentui/react'
import type { HandleInputSearch, HandleSubmit } from '../../types/Form';
import './InputSearch.scss'

interface InputSearchProps {
    handleSubmit: (e: HandleSubmit) => void;
    handleInputSearch: (e: HandleInputSearch) => void;
}

export const InputSearch = ({ handleSubmit, handleInputSearch }: InputSearchProps) => {

    const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

    return (
        <form onSubmit={handleSubmit}>
            <SearchBox
                className='search-input'
                styles={searchBoxStyles}
                onChange={handleInputSearch}
                placeholder='Vengadores, Barbie, ...'
            />

            <ActionButton
                iconProps={{ iconName: 'Search' }}
                ariaLabel="Buscar"
                type='submit'
                style={{ color: 'white' }}
            >Buscar</ActionButton>
        </form>
    )
}