import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
function Loginup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hide, setHide] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

    }
    return (
        <div className='login_daddy'>
            <div className='login_daddy_child'>
                <form className='login_head'>
                    <center style={{ color: "#fff", fontSize: "35px", fontWeight: "600" }}>Login</center>

                    <div style={{ display: "flex", alignItems: "center", position: "relative", fontSize: "22px", color: "#fff", overflow: "hidden" }}>
                        {/*  */}<input type="email" placeholder='Email ID' onChange={e => setEmail(e.target.value)} />
                        <SiMinutemailer style={{ position: "absolute", right: "3%" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", position: "relative", color: "#fff", overflow: "hidden" }}>
                        {/*  */}<input type={`${hide == true ? 'text' : 'password'}`} placeholder='Password' onChange={p => setPassword(p.target.value)} />
                        {
                            hide == true ?
                                <FaEye style={{ position: "absolute", right: "3%", fontSize: "22px", cursor: "pointer" }} onClick={() => setHide(false)} />
                                :
                                <FaEyeSlash style={{ position: "absolute", right: "3%", fontSize: "22px", cursor: "pointer" }} onClick={() => setHide(true)} />
                        }
                    </div>
                    <input type="submit" onSubmit={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Loginup