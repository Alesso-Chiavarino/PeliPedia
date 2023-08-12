# Prueba técnica — React developer - RAONA

## Descripción

Este repositorio contiene mi solución para la prueba técnica de desarrollo front-end en React para Raona. La aplicación consiste en una interfaz para buscar y ver detalles de películas utilizando la API de themoviedb. Se ha implementado siguiendo las mejores prácticas de desarrollo y haciendo uso de las herramientas recomendadas.

### Links

- [https://pelipedia.vercel.app/](https://pelipedia.vercel.app/)
- [Árbol de componentes](https://res.cloudinary.com/dotaebdx8/image/upload/v1691724161/components-tree_vvbxmm.png)

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Posibles Mejoras](#posibles-mejoras)
- [Posibles Extensiones](#posibles-extensiones)
- [Stack Utilizado](#stack-utilizado)
- [Árbol de Componentes](#árbol-de-componentes)

## Instalación

Para comenzar a trabajar con este proyecto, primero debemos clonar el repositorio en nuestra máquina local, para eso ejecutamos el siguiente comando en la terminal:

```
git clone git@github.com:Alesso-Chiavarino/PeliPedia.git
```

Después, debemos instalar las dependencias del proyecto usando:

```
npm install
```

## Configuración

Para poder utilizar la API de themoviedb es necesario crear un archivo `.env` en la raíz del proyecto con la siguiente variable de entorno:

```
VITE_TMDB_API_KEY= 2e5cc13891fc400c318fba10975bd651
```

## Ejecución

Para ejecutar el proyecto en modo desarrollo:

```
npm run dev
```

La aplicación se ejecutará en el puerto **5173**.

Para ejecutar los tests:

```
npm test
```

## Decisiones Técnicas

> ¿Cómo decidí las opciones técnicas y arquitectónicas utilizadas como parte de mi solución?

- Se optó por utilizar la arquitectura de componentes funcionales con React Hooks para aprovechar las características más modernas de React.
- Se aplicó el patrón de diseño Provider para manejar el estado global de la aplicación.
- Redux se utilizó para gestionar el estado global de las películas, facilitando la comunicación entre componentes. Además, se utilizó Redux Toolkit por la legibilidad y facilidad de uso, además de evitar código boilerplate.
- Se buscó separar la lógica de negocio de la interfaz de usuario, haciendo uso del patrón de diseño presentacional y contenedor creando componentes de dichos tipos.
- Pensando en la escalabilidad del proyecto, se crearon custom hooks para gestionar datos de la API, manejar la paginación y en caso de ser necesario, se creó una capa de abstracción para poder cambiar redux por otra forma de gestión de estado.
- Creación de una capa de servicios para gestionar las llamadas a la API.
- Se siguió una estructura de carpetas que permite una fácil organización y escalabilidad del código.
- Para Sass se utilizó la metodología BEM para facilitar la legibilidad.
  [<sub>Volver al Índice</sub>](#tabla-de-contenidos)

## Posibles Mejoras

> ¿Hay alguna mejora que pueda hacer en mi envío?

- Mejorar la interfaz de usuario, agregando animaciones y mejorando el diseño.
- Mejorar la gestión de errores, agregando tipo de errores según el tipo de error que se reciba de la API. Según lo que he visto, la API no devuelve muchos status de errores, por ejemplo no devuelve un error cuando no se encuentran resultados para una búsqueda.
- Gestión de la paginación, seleccionando la cantidad de resultados a mostrar por página. Actualmente se muestran 20 resultados por página, la API solo envia 20 resultados y no permite cambiar la cantidad de resultados a mostrar. Según lo que he leído, antes se permitía modificar la cantidad de resultados a mostrar, pero ahora no.

  [<sub>Volver al Índice</sub>](#tabla-de-contenidos)

## Posibles Extensiones

> ¿Qué haría de manera diferente si se me asignara más tiempo?

- Si se quisiera extender la aplicación, según lo que he visto, la API permite ver trailers de las películas, por lo que se podría agregar un botón para ver el trailer de la película.
- Se podría agregar un botón para agregar películas a una lista de favoritos.
- Se podría agregar botónes para agregar películas a una lista de películas vistas, peliculas por ver, sistema de autenticación e autorización, etc.
- En cuanto a testing se podría agregar más tests unitarios, como a la utilities functions, y custom hooks. Aclaración: Cuando se ejecutan todos los tests juntos pueden haber errores por la cantidad de llamadas a la API, pero si se ejecutan los tests de forma individual no debería haber problemas.
- En terminos de diseño, hubiera estudiado más a fondo Fluent UI para poder utilizarlo de forma más eficiente y crear una interfaz más atractiva.

[<sub>Volver al Índice</sub>](#tabla-de-contenidos)

## Stack Utilizado

Sugeridos:

- React
- TypeScript
- Redux / Redux Toolkit
- Fluent UI
- Sass
- Responsive Design
- Manejo de errores / cargas

Complementarios:

- Unit Testing y E2E Testing (vitest - react-testing-library)
- Deploy (Vercel)
- Axios (Gestionar mejor los errores y parametros de la API)

[<sub>Volver al Índice</sub>](#tabla-de-contenidos)

## Árbol de Componentes

![](https://res.cloudinary.com/dotaebdx8/image/upload/v1691724161/components-tree_vvbxmm.png)

[<sub>Volver al Índice</sub>](#tabla-de-contenidos)

> Muchas gracias por la oportunidad!
