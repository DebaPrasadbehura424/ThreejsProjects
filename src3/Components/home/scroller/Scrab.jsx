import React from 'react'




let a1 = [
    "https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3954351/pexels-photo-3954351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/26921067/pexels-photo-26921067/free-photo-of-paradise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
]




function Scrab() {
    return (
        <div style={{ width: "100vw", height: "60vh", marginBottom: "50px",overflow:"hidden" }}>
            <div  className="scrollyou" style={{ width: "200%", height: "60vh", display: "flex", gap: "15px",overflow:"hidden" }}>
                {a1.map((elm) => {
                    return (
                        <div   style={{ width: "40%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`${elm}`} alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                        </div>
                    )
                })
                }
                {a1.map((elm) => {
                    return (
                        <div   style={{ width: "40%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`${elm}`} alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default Scrab