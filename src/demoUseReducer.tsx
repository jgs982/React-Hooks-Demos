//! Vamos a crear un componente padre que va a tener información del nombre y apellido 
//! de una persona, y vamos a crear un componente hijo que nos va a servir para editar 
//! el campo nombre

import React from 'react'


//! Tipamos nuestro reducer y acciones
interface UserState {
    name: string;
    lastname: string;
}

interface Action {
    type: string;
    payload: any;
}

const actionIds = {
    setName: 'setname',
    setLastname: 'setlastname'
}

//! Creamos nuestro reducer
const userInfoReducer = (state:UserState, action:Action):UserState => {

    switch(action.type) {

        case actionIds.setName:
            return {
                ...state,
                name: action.payload
            }

        case actionIds.setLastname:
            return {
                ...state,
                lastname: action.payload
            }

        default:
            return state
    }
}

//! Componente Hijo
interface Props {
    name: string;
    dispatch: React.Dispatch<Action>
}

const EditUsername:React.FC<Props> = React.memo(props => {

    //! Para que nos avise si el control se repinta o no
    console.log("Hey, I'm only rerendered when name gets updated, check React.memo")

    return (
        <input
            value={props.name}
            onChange={e => props.dispatch({
                type: actionIds.setName,
                payload: e.target.value
            })}
        />
    )
})

//! Componente Padre
export const MyComponent9 = () => {

    const [userInfo, dispatch] = React.useReducer(userInfoReducer, {name:'John', lastname:'Doe'})

    return (
        <>
            <h3> {userInfo.name} {userInfo.lastname} </h3>
            
            <EditUsername
                name={userInfo.name}
                dispatch={dispatch}
            />

            <input 
                value={userInfo.lastname}
                onChange={e => dispatch({
                    type: actionIds.setLastname,
                    payload: e.target.value
                })}
            />
        </>
    )
}