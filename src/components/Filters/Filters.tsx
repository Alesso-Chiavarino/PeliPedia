import { InputSearch } from '../InputSearch/InputSearch'
import { PaginationBtns } from '../PaginationBtns/PaginationBtns'
import { Stack } from '@fluentui/react/lib/Stack'
import { useMovies } from '../../hooks/useMovies'
import { YearInput } from '../YearInput/YearInput'

export const Filters = () => {

    const { nextPage, prevPage, handleTextField, handleSubmit, handleInputSearch, movies: { page, total_pages } } = useMovies()

    return (
        <>
            <Stack
                horizontal
                horizontalAlign="space-between"
                verticalAlign="center"
                wrap

                styles={{
                    root: {
                        width: '100%',
                        margin: '40px 0',
                        color: '#fff',
                        display: 'flex',
                    },
                    inner: {
                        '@media (max-width: 560px)': {
                            flexDirection: 'column',
                            alignItems: 'initial',
                            gap: '20px'
                        }
                    }
                }}
            >
                <InputSearch handleSubmit={handleSubmit} handleInputSearch={handleInputSearch} />
                <YearInput handleTextField={handleTextField} />
            </Stack>
            <PaginationBtns nextPage={nextPage} prevPage={prevPage} page={page} total_pages={total_pages} />
        </>
    )
}