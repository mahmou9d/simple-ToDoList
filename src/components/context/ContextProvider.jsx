import React, { createContext, useState } from 'react'

export const Delete =createContext("")

const ContextProvider = ({children}) => {
    const [dltask,setDltask] =useState()
  return (
    <>
        <Delete.Provider 
// @ts-ignore
        value={{dltask,setDltask}}>
            {children}
        </Delete.Provider>
    </>
  )
}

export default ContextProvider
