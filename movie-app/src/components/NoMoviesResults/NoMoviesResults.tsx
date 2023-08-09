export const NoMoviesResults = ({ error }: { error: string }) => {
    return (
        <p>No se han encontrado resultados para la búsqueda {error}</p>
    )
}