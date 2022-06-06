# React Hooks

Demos y explicaciones de los principales Hooks usados actualmente en React

- useState:
    - Se inicializa con un valor por defecto
    - Te devuelve un array que contiene una especie de getter y un setter
    - La manera más cómoda de consumir lo que devuelve es hacer destructuring
    - Si usamos objetos en el estado tenemos que seguir el principio de inmutabilidad y no modificar el original
  
- useEffect:
    - Nos permite engancharnos a ciertos eventos en el tiempo y poder ejecutar código:
        - Justo cuando un componente se monta en el DOM ([])
        - Cuando cambie un valor
        - Después de cada render (vacío)
    - Posee una función de limpieza al desmontar un componente

- Custom Hook:
    - Para reusar funcionalidad

- Custom Hook Debounce ( https://github.com/xnimorz/use-debounce ):
    - Lo que hace este hook es esperar un poquito a que el usuario termine de teclear para enviar la petición, ahorrando así llamadas innecesarias
    - Se instala: npm install use-debounce --save

- React.Memo
    - Nos hace falta hilar fino y sólo volver a repintar un componente si sus propiedades han cambiado
    - Aplica el patrón memoize, recuerda para la propiedad el puntero del último render, cuando llega al siguiente los compara y si son iguales devuelve el render del componente cacheado

- React.useCallback
    - useCallback guarda la función que se creo originalmente, y devuelve esta en vez de crear una nueva en cada render, esto lo conseguimos pasandole un array vacio como segundo parametro (como hacíamos con React.useEffect) si queremos que se reevalue dependiendo del valor de una propiedad o estado, podemos añadirlas al segundo aprametro de este callbakc (al igual que con useEffect), y si omitimos el segundo parametro, esta función se reevaluara después de cada render

- useReducer:
    - Inspirado en el patrón Redux
    - Usado en escenarios en los que se tiene mucha lógica y muchos niveles de subcomponentes
    - Agrupamos un conjunto de funcionalidad:
      - Estado (los datos)
      - Acciones (que se lanzan con un dispatcher y actualizan el estado)
      - Reducer (es una función que acepta el estado anterior y la acción, y devuelve un nuevo estado)

- useContext:
    - Permite compartir datos entre componentes sin pasar por las props
    - El Contexto vive dentro de un componente React, con lo que se integra en el flujo unidireccional, es decir, cualquier cambio que haga en él hace que se disparen actualizaciones de manera automática
    - El Contexto lo puedo colocar al nivel que quiera del árbol de componentes

- useRef