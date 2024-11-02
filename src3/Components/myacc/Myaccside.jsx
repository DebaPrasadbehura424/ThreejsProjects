import React, { useContext, useState } from 'react';
import Myaccmain from './Myaccmain';
let setting = [
    {
        id: 0,
        con: "Personal Info",


    },
    {
        id: 1,
        con: "SocialPost",
    },
    {
        id: 2,
        con: "Communitys",
    },
    {
        id: 3,

        con: "Notifications",
    },
    {
        id: 4,
        con: "Logout"
    }

]
function Myaccside() {
    const [colorful, setColorful] = useState(0);
    return (
        <div style={{ width: "350px", height: "90vh", display: "flex", alignItems: "center", justifyItems: "center", flexDirection: "column", gap: "20px", fontFamily: "Edu AU VIC WA NT Hand, cursive", overflow: "hidden", boxShadow: "2px 3px 10px 0px #000", marginLeft: "10px" }}>
            <h2>Account & Settings</h2>
            {
                setting.map((x, index) => {
                    return (
                        <div className='contentball' onClick={() => setColorful(x.id)} style={{ cursor: "pointer" }}>
                            <div style={{ width: "15px", height: "15px", border: "2px solid #05004e", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <div className={`${index == colorful ? 'ball ballative' : 'ball '}`}></div>
                            </div>
                            <div className={`${index == colorful ? 'contentdown activate' : 'contentdown '}`}>{x.con}</div>
                        </div>
                    )
                })
            }

         



        </div>
    )
}

export default Myaccside