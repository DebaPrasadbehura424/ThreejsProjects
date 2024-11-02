import React from 'react'
import Awsome from './Awsome'
import Aboutstory from './Aboutstory'
import Aboutmission from './Aboutmission'
import AboutPhoto from './AboutPhoto'
import Foot from '../home/Foot'
function Abouthead() {
    return (
        <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#F0EDE7" }}>
        
            <Awsome />
            <Aboutstory />
            <Aboutmission />
            <AboutPhoto />
            <Foot />
        </div>
    )
}

export default Abouthead