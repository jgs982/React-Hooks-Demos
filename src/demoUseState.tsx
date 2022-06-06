import React from 'react'


interface UserInfo {
    name: string;
    lastname: string;
}

export const MyComponent:React.FC = () => {

    //! Estado que almacena un string
    const [myName, setMyName] = React.useState('John Doe')

    //! Estado que almacena un objeto
    const [userInfo, setUserInfo] = React.useState<UserInfo>({
        name: 'Jesús',
        lastname: 'Guerrero'
    })

    return(
        <>
            <h4> {myName} </h4>

            <input 
                onChange={e => setMyName(e.target.value)}
                value={myName}
            /> 

            <h4> {userInfo.name} - {userInfo.lastname} </h4>                                                 

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
        </>
    )
}
