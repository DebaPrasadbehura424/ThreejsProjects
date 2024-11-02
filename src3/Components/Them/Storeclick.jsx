import React, { useContext } from 'react'
import { Createcontext } from '../home/HomoContext';
import { NavLink } from 'react-router-dom';
import Foot from '../home/Foot';
function Storeclick() {
    const catshow = useContext(Createcontext)
    return (
        <div style={{ fontFamily: "Roboto,sans-serif" }}>
            <div style={{ width: "100vw", height: "60vh", marginTop: "120px" }}>
        <NavLink to='/theme'>
                <p style={{color:"#1e1e1e",fontSize:"20px",marginLeft:"30px"}}><u>back</u></p>
        </NavLink>
                {
                    catshow.showbrand && <div style={{ width: "100vw", height: "100%", position: "relative", display: "flex", }}>
                        {
                            catshow.showbrand.map((elm) => {
                                return (
                                    <>
                                        <div style={{ width: "300px", height: "90%", background: "#fff", position: "absolute", left: "20px", top: "20px", borderRadius: "10px", backgroundColor: "#f0ece2" }}>
                                            <img src={elm.links} alt='themes' />
                                        </div>
                                        <div style={{ width: "500px", height: "100%", marginLeft: "400px", marginTop: "20px", }}>
                                            <ul style={{ listStyle: "none", lineHeight: "28px" }}>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Title:</span>{elm.tity}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Description:</span>{elm.descrip}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>BrandName:</span>{elm.brand}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Price:</span>{elm.price}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Category:</span>{elm.cat}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Rating:</span>{elm.rating}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Stock:</span>{elm.stock}</li>
                                                <li><span style={{ fontSize: "20px", fontWeight: "bold" }}>Warenty:</span>{elm.war}</li>
                                            </ul>
                                        </div>
                                        <img src={elm.qr} alt="qrcode" style={{ marginLeft: "150px" }} />
                                    </>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <Foot/>
        </div>
    )
}

export default Storeclick