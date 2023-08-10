import { InputSearch } from '../InputSearch/InputSearch'
import { PaginationBtns } from '../PaginationBtns/PaginationBtns'

import { useMovies } from '../../hooks/useMovies'
import { YearInput } from '../YearInput/YearInput'

export const Filters = () => {

    const { nextPage, prevPage, handleTextField, handleSubmit, handleInputSearch } = useMovies()

    return (
        <>
            <InputSearch handleSubmit={handleSubmit} handleInputSearch={handleInputSearch} />
            <YearInput handleTextField={handleTextField} />
            <PaginationBtns nextPage={nextPage} prevPage={prevPage} />
        </>
    )
}