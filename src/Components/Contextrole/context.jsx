import { React, useState } from 'react'
import { createContext } from 'react';
export const contextuse = createContext(null);
function Contexts({ children }) {
    const [down, setDown] = useState(null);
    const [DAY, setDay] = useState(0);
    const [url, setUrl] = useState();

    return (
        <contextuse.Provider value={{ down, setDown, DAY, setDay,url, setUrl }}>
            {children}
        </contextuse.Provider>
    )
}

export default Contexts;