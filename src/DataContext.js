import {createContext , useState } from 'react'

const Context = createContext();

export  const ContextProvider =({children}) => {
        const [predata , setPreData] = useState([]);
        const [cartitem , setCartItem] = useState([]);
        const [totalp , setTotalp] = useState(0);
        const [updateData, setUpdateData] = useState([])
        const [alreadyad, setAlreadyad] = useState(false);
        


       


        return (
                <Context.Provider value={{predata , setPreData ,cartitem , setCartItem,totalp , setTotalp, updateData, setUpdateData,alreadyad, setAlreadyad}}>
                    {children}
                </Context.Provider>
        )
}

export default Context