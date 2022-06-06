//! Tenemos un listado de resultado de búsqueda (que viene de un servidor), y queremos
//! que cada vez que introduzcamos un cambio en un input de filtrado, envíe una petición
//! al servidor para obtener la nueva lista filtrada y mostrarla
//!
//! Nota: Haremos uso del Debounce (esperar un poquito a que el usuario termine de teclear
//!       para enviar la petición, ahorrando así llamadas innecesarias)

import React from 'react'
import { useDebounce } from 'use-debounce'

export const MyComponent5 = () => {

    //! Almacena el filtro actual de búsqueda
    const [filter, setFilter] = React.useState('')

    //! Almacena la lista de usuarios
    const [userCollection, setUserCollection] = React.useState([])

    //! Hook Personalizado
    const [debouncedFilter] = useDebounce(filter, 1000)

    //! Acceder a una Rest Api, que se ejecute cada vez que se cambie el filtro de búsqueda
    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
            .then(response => response.json())
            .then(json => setUserCollection(json))
    }, [debouncedFilter])

    return (
        <div>
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />

            <ul>
                {
                    userCollection.map((user, index) => (
                        <li key={index}> {user.name} </li>
                    ))
                }
            </ul>
        </div>
    )
}