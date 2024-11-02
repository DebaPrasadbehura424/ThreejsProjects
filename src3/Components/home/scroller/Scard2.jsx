import React from 'react'
let a2 = [
    "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=600",
]



function Scard2() {
    return (
        <div style={{ width: "100vw", height: "60vh", marginBottom: "50px", overflow: "hidden" }}>
            <div className="scrollyouyou" style={{ width: "200%", height: "60vh", display: "flex", gap: "15px", overflow: "hidden" }}>
                {a2.map((elm) => {
                    return (
                        <div  style={{ width: "40%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`${elm}`} alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                        </div>
                    )
                })
                }
                {a2.map((elm) => {
                    return (
                        <div  style={{ width: "40%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`${elm}`} alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default Scard2