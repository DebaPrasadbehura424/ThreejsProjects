import React from 'react';
import { FaEdit } from "react-icons/fa";
function Myaccmain() {
    return (
        <div style={{ width: "75%", height: "90vh", boxShadow: "2px 0px 1px #000", position: "relative", fontFamily: "Poppines,sans-serif",border:"2px solid #fff " }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "42%", gap: "20px" }}>
            <div style={{ width: "200px", height: "200px", border: "1px dotted #000", overflow: "hidden", borderRadius: "100%", position: "relative", backgroundColor: "#e9e9e9", marginTop: "10px" }}>
                <img src="https://i.redd.it/male-random-selfie-27m-v0-s6bd3ohvwx4c1.jpg?width=2208&format=pjpg&auto=webp&s=fee39976344658358256e1679cf8bfe5eff65159" alt="profile_pic" style={{ width: "100%" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "5px", marginTop: "px" }}>
                <p style={{ color: "#0357D5", fontFamily: "Poppines,sans-serif" }}>Deba Prasad Behuara</p>
                <button style={{ width: "140px", height: "40px", border: "1px solid #fff", backgroundColor: "#735DA5", borderRadius: "10px", color: "#fff" }}><FaEdit /> Edit Profile</button>

            </div>
            <div style={{ width: "50%", height: "55%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%", height: "30%" }}>
                    <div >
                        <center>0</center>
                        <center>Posts</center>
                    </div>
                    <div>
                        <center>0</center>
                        <center>Followers</center>
                    </div>
                    <div>
                        <center>0</center>
                        <center>Following</center>
                    </div>
                </div>
                <div style={{ padding: "10px" }}>
                    <center><u> <b>Bio</b></u></center>
                    <center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi, fugit non esse repellat totam nam perspiciatis aperiam iste provident dicta qui expedita et ratione molestiae rem quis praesentium ex!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</center>
                </div>
            </div>
        </div>
        {/* sec */}
        <div style={{ width: "98%", height: "55%", backgroundColor: "#735DA5", marginTop: "20px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <form style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "95%", height: "100%" }}>
                <div className='row1' style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", height: "110%", width: "50%" }}>
                    <input type="text" placeholder='Enter your name ' style={{ width: "80%", height: "50px", outline: "none", borderTop: "1px solid #fff", borderLeft: "1px solid #fff", borderRight: "1px solid #fff" }} />
                    <input type="text" placeholder='Enter your Username ' style={{ width: "80%", height: "50px", outline: "none", borderTop: "1px solid #fff", borderLeft: "1px solid #fff", borderRight: "1px solid #fff" }} />
                    <input type="text" placeholder='Pronouns' style={{ width: "80%", height: "50px", outline: "none", borderTop: "1px solid #fff", borderLeft: "1px solid #fff", borderRight: "1px solid #fff" }} />
                </div>
                <div className='row2' style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", height: "90%", width: "50%" }}>
                    <div>
                        <textarea rows="6" cols="50" placeholder='Add Bio'>

                        </textarea>
                    </div>
                    <div style={{ cursor: "pointer", color: "#735DA5", fontWeight: "bolder", textDecoration: "underline" }}>Add Link</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", backgroundColor: "#fff", width: "300px", height: "50px", borderRadius: "5px", justifyContent: "center", color: "#735DA5", fontWeight: "800" }}>
                        <label >Male:<input type="radio" name='d' /></label>
                        <label >Female:<input type="radio" name='d' /></label>
                        <label >Others:<input type="radio" name='d' /></label>
                    </div>
                    <div className='sumreset' style={{ display: "flex", gap: "20px" }}>
                        <button type='submit' style={{ width: "140px", height: "40px", border: "1px solid #fff", backgroundColor: "#735DA5", borderRadius: "10px", color: "#fff" }}>SUBMIT</button>
                        <button type='reset'
                            style={{
                                width: "140px", height: "40px", border: "1px solid #fff", backgroundColor: "#735DA5", borderRadius: "10px", color
                                    : "#ffff"
                            }}>RESET</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Myaccmain