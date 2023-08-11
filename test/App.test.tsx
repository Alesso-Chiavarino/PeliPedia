import { describe, test, expect, beforeEach } from 'vitest'
import { App } from '../src/App'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import { initializeIcons } from '@fluentui/react'

describe('<App/>', () => {

    initializeIcons()

    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })

    test('should render the app header', () => {
        expect(screen.getByText(/PeliPedia/i)).toBeDefined()
    })

    test('should render filter elements', () => {

        const SearchBtn = screen.getByRole('button', { name: /Buscar/i })

        const SearchInput = screen.getByRole('searchbox')

        const inputYear = screen.getByPlaceholderText('2023')

        expect(SearchInput).toBeDefined()

        expect(inputYear).toBeDefined()

        expect(SearchBtn).toBeDefined()

    })

    test('should render pagination buttons', () => {

        const paginatioBtnLeft = screen.getByRole('button', { name: /Anterior/i })

        const paginatioBtnRight = screen.getByRole('button', { name: /Siguiente/i })

        expect(paginatioBtnLeft).toBeDefined()

        expect(paginatioBtnRight).toBeDefined()

    })

    test('should render movie results', () => {

        const movieResults = screen.getByText(/Resultados:/i)

        const totalPages = screen.getByText(/Páginas totales:/i)

        const pageCounter = screen.getByText(/Página:/i)

        expect(movieResults).toBeDefined()

        expect(totalPages).toBeDefined()

        expect(pageCounter).toBeDefined()

    })

    test('should fetch all movies', async () => {

        await waitFor(() => {
            const movieCards = screen.getAllByRole('listitem');
            expect(movieCards.length).equal(20)
        });

    })

    test('should render movie cards, each with a button to see movie details', async () => {

        await waitFor(() => {

            const buttons = screen.getAllByRole('button', { name: /Detalles/i })

            buttons.forEach(button => {
                expect(button).toBeDefined()
            })
        })
    })

    test('should can see movie details touching the button', async () => {

        await waitFor(() => {

            const buttons = screen.getAllByRole('button', { name: /Detalles/i })

            const firstButton = buttons[0]

            fireEvent.click(firstButton)

            const movieDetails = screen.getByText(/Detalles de la película/i)

            expect(movieDetails).toBeDefined()
        })
    })

    test('should can search movies by title', async () => {

        await waitFor(() => {

            const searchInput = screen.getByRole('searchbox') as HTMLInputElement

            fireEvent.change(searchInput, { target: { value: 'vengadores' } })

            expect(searchInput.value).toBe('vengadores')

            const searchBtn = screen.getByRole('button', { name: /Buscar/i })

            fireEvent.click(searchBtn)

            const movieCards = screen.getAllByRole('listitem');

            const movie = movieCards[0]

            const movieTitle = movie.querySelector('h4')

            expect(movieTitle?.textContent).toMatch(/vengadores/i)

            expect(movieCards.length).toBeGreaterThan(0)

        })
    })

    test('should can search movies by year', async () => {

        await waitFor(() => {

            const inputYear = screen.getByPlaceholderText('2023') as HTMLInputElement

            fireEvent.change(inputYear, { target: { value: '2021' } })

            expect(inputYear.value).toBe('2021')

            const searchBtn = screen.getByRole('button', { name: /Buscar/i })

            fireEvent.click(searchBtn)

            const movieCards = screen.getAllByRole('listitem');

            const movieCard = movieCards[0]

            const movieYear = movieCard.querySelector('span')

            expect(movieYear?.textContent).toMatch('2021')

            expect(movieCards.length).toBeGreaterThan(0)

        })
    })

    test('should filter movies by year and title', async () => {

        await waitFor(() => {

            const inputYear = screen.getByPlaceholderText('2023') as HTMLInputElement

            fireEvent.change(inputYear, { target: { value: '2018' } })

            expect(inputYear.value).toBe('2018')

            const searchInput = screen.getByRole('searchbox') as HTMLInputElement

            fireEvent.change(searchInput, { target: { value: 'vengadores' } })

            expect(searchInput.value).toBe('vengadores')

            const searchBtn = screen.getByRole('button', { name: /Buscar/i })

            fireEvent.click(searchBtn)

            const movieCards = screen.getAllByRole('listitem');

            const movieCard = movieCards[0]

            const movieYear = movieCard.querySelector('span')

            const movieTitle = movieCard.querySelector('h4')

            expect(movieYear?.textContent).toMatch('2018')

            expect(movieTitle?.textContent).toMatch(/vengadores/i)

            expect(movieCards.length).toBeGreaterThan(0)

        })

    })

    test('should can paginate pass to next page', async () => {

        await waitFor(() => {

            const nextBtn = screen.getByRole('button', { name: /Siguiente/i })

            fireEvent.click(nextBtn)

            const pageCounter = screen.getByText(/Página: 2/i)

            expect(pageCounter).toBeDefined()

        })
    })

    test('should render footer', () => {

        const footer = screen.getByText(/© 2022 Alessandro Chiavarino, Todos los derechos reservados./)

        expect(footer).toBeDefined()

    })

})