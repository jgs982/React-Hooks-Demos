import React from 'react'


export const MyComponent2 = () => {

    const [username, setUsername] = React.useState('')

    //! Asignamos un valor justo cuando se monta el componente en el dom ([])
    //! Simulando una llamada asíncrona
    React.useEffect(() => {
        setTimeout(() => {
            setUsername('John')
        }, 2000)
    }, [])

    return (
        <>
            <h4>{username}</h4>
            <input value={username} onChange={e => setUsername(e.target.value)}/>
        </>
    )
}