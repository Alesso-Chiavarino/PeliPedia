export const NoMoviesResults = ({ error }: { error: string }) => {
    return (
        error ?
            <p>{error}</p>
            :
            <p>No se han encontrado resultados para la búsqueda</p>
    )
}