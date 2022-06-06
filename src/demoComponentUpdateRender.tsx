import React from "react"

export const MyComponent4 = () => {

    const [visible, setVisible] = React.useState(false)

    return (
        <>
            { visible && <MyChildComponent/> }

            <button onClick={() => setVisible(!visible)}>
                Toggle Child component visibility
            </button>
        </>
    )
}

const MyChildComponent = () => {

    const [userInfo, setUserInfo] = React.useState({
        name: "John",
        lastname: "Doe"
    })

    //! Vamos a ejecutar un código justo después de cada renderizado
    React.useEffect(() => {
        console.log('Called right after every render')

        //! También podemos añadir una función para liberar recursos
        //! justo antes de que se ejecute el siguiente render
        return () => console.log('Cleanup function called after every render')
    })

    return (
        <div>
            <h3> {userInfo.name} {userInfo.lastname} </h3>

            <input
                value={userInfo.name}
                onChange={e => setUserInfo({
                    ...userInfo,
                    name: e.target.value
                })}
            />

            <input
                value={userInfo.lastname}
                onChange={e => setUserInfo({
                    ...userInfo,
                    lastname: e.target.value
                })}
            />
        </div>
    )
}