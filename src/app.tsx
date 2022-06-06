import React from 'react'

//! Colocamos el provider a nivel global de la aplicación
import  { MyComponent10, MyContextProvider } from './demoUseContext'

import { MyComponent2 } from './demoComponentDomOnload'
import { MyComponent3 } from './demoComponentDomUnmount'
import { MyComponent4 } from './demoComponentUpdateRender'
import { MyComponent6 } from './demoCustomHook'
import { MyComponent5 } from './demoDebounce'
import { MyComponent7 } from './demoReactMemo'
import { MyComponent8 } from './demoUseCallback'
import { MyComponent9 } from './demoUseReducer'
import { MyComponent } from './demoUseState'
import { MyComponent11 } from './demoUseRef'

export const App = () => {
    return (
        <>
            <h1> React Hooks </h1>
            <hr/>
            <MyComponent/>
            <hr/>
            <MyComponent2/>
            <hr/>
            <MyComponent3/>
            <hr/>
            <MyComponent4/>
            <hr/>
            <MyComponent5/>
            <hr/>
            <MyComponent6/>
            <hr/>
            <MyComponent7/>
            <hr/>
            <MyComponent8/>
            <hr/>
            <MyComponent9/>
            <hr/>

            {/* Cualquier componente que este debajo de ese provicer, puede acceder al estado */}
            <MyContextProvider>
                <MyComponent10/>
            </MyContextProvider>

            <hr/>
            <MyComponent11/>
            <hr/>
        </>
    )
}