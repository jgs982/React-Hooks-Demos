//! En este ejemplo vamos a ver como liberar recursos cuando desmontamos un componente del DOM

import React from 'react'

export const MyChildComponent = () => {

    React.useEffect(() => {
        console.log('El componente se acaba de montar en el DOM')

        //! Esta sería la función de limpieza que se va a ejecutar cuando el componente se desmonte
        return () => console.log('El componente se acaba de desmontar del DOM')
    }, [])

    return (
        <h4> Hello Form Child Component </h4>
    )
}

export const MyComponent3 = () => {

    const [visible, setVisible] = React.useState(false)

    return (
        <>
            {
                visible && <MyChildComponent/>
            }

            <button onClick={() => setVisible(!visible)}>
                Toggle Child Component Visibility
            </button>
        </>
    )
}