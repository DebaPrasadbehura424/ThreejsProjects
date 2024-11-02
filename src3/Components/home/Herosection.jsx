import React from 'react'

function Herosection() {
    return (
        <>

            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                <div className='herophoto'>
                    <h1 style={{ fontSize: "50px", textDecoration: "underline" }}>Blog App</h1>
                    <img src="https://cdn.wallpapersafari.com/6/25/8yTk3F.jpg" alt="Herophoto" />
                </div>
                <button style={{ position: "absolute", width: "500px", height: "70px", fontSize: "25px", color: "#fff", backgroundColor: "#020230", borderRadius: "20px", border: "5px solid #fff", fontWeight: "bold", fontFamily: "Poppins,sans-serif", cursor: "pointer", top: "120%" }}>Click to Find Best Places for holidays</button>
            </div>
            
        </>
    )
}

export default Herosection