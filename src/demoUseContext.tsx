import React from 'react'

//! Creamos un context que me permita almacenar el nombre del usuario que se ha logueado
const MyContext = React.createContext({
    username: '',
    setUsername: value => {}
})

//! El contexto necesita vivir dentro de un componente especial que llamamos provider
export const MyContextProvider = props => {

    const [username, setUsername] = React.useState('John Doe del contexto...')

    return (
        <MyContext.Provider value={{username, setUsername}}>
            {props.children}
        </MyContext.Provider>
    )
}


export const MyComponent10 = () => {

    const myContext = React.useContext(MyContext)

    return (
        <>
            <h3> { myContext.username } </h3>
        </>
    )
}