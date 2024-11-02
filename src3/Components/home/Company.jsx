import React from 'react'

function Company() {
    return (
        <div style={{padding:"20px", marginTop:"70px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "100vw", height: "60vh", fontFamily: "Gloria Hallelujah, cursive" }}>
            <div className='firstrow' style={{ borderRight: "1px solid #000", height: "100%", width: "100%",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:'column',padding:"10px",fontSize:"18px"}}>
                <p>Case Studies: Present detailed case studies of successful projects, businesses, or individuals, showcasing actionable strategies and lessons learned.</p>
                <p>Success Stories: Inspire your audience with real-life success stories, demonstrating how others have overcome challenges and achieved significant milestones.
                </p>
                Practical Tips: Offer practical tips and actionable advice that readers can immediately apply to improve their personal or professional lives.
            </div>
            <div className='secrow' style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://wpcom.files.wordpress.com/2024/06/logos-black-2x-optimized.webp" alt="jok" style={{ width: "90%", height: "97%" }} />
            </div>
        </div>
    )
}

export default Company