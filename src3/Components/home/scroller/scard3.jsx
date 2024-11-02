import React from 'react'


let a3 = [

    "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
]


function Scard3() {
    

    return (

        <div style={{ width: "100vw", height: "60vh", marginBottom: "50px", overflow: "hidden" }}>
            <div className="scrollyouthree" style={{ width: "200%", height: "60vh", display: "flex", gap: "15px", overflow: "hidden" }}>
                {a3.map((elm) => {
                    return (
                        <div style={{ width: "40%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={`${elm}`} alt="" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
                        </div>
                    )
                })
                }
                {a3.map((elm) => {
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

export default Scard3