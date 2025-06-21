import { createContext } from 'react';

export const Context=createContext();

export const UserContext = ({children})=>{
    const user ={name:"viky",phn:"9876543210"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
