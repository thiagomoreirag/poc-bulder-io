import React, { createContext } from 'react'

export const Context = createContext<any>(null);

function Provider({ children }) {
    return <Context.Provider value={{ foo: 'bar' }}>
        {children}
    </Context.Provider>
}

export default Provider