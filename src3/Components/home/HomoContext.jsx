import React, { useState } from 'react'
import { createContext } from 'react';
export const Createcontext = createContext(null);
function HomoContext({ children }) {




    const [seadrop, Setseadrop] = useState(false);
    const [locdata, setLocdata] = useState([]);
    const [showbrand, Setshowbrand] = useState([]);
    let musicians;

    return (
        <Createcontext.Provider value={{ seadrop, Setseadrop, locdata, setLocdata, showbrand, Setshowbrand,musicians }}>
            {children}
        </Createcontext.Provider>

    )
}

export default HomoContext