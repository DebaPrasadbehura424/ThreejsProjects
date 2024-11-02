import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



let photos = [
    {
        id: 1,
        link: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=612x612&w=0&k=20&c=AA-85akfRli0ezxd5KTyI7Irxbt8lrQQxrVxRAckUTE="
    },
    {
        id: 2,
        link: "https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.jpg?b=1&s=612x612&w=0&k=20&c=r8DNwGJCM96HuLuraetmaxk2UajyN1XpwBlDC65ksmE="
    },
    {
        id: 3,
        link: "https://ghost.org/resources/content/images/2023/02/news-desert-1.png"
    },
    {
        id: 4,
        link: "https://assets.telegraphindia.com/telegraph/7f57a0af-88fc-4ff6-b195-3e021f3d513e.jpg"
    },
    {
        id: 5,
        link: "https://cepa.org/wp-content/uploads/2022/04/MicrosoftTeams-image-1.jpg"
    },
    {
        id: 6,
        link: "https://i.pinimg.com/736x/97/06/6a/97066adff5bd47d2b9933d5218ac77c1.jpg"
    },

]



function Downsection() {
    const [scroll, setScroll] = useState(0);
    const [count, setCout] = useState(0);


    function handleright() {
        setScroll((prev) => prev == 1200 ? 1200 : prev + 600);
        setCout((num) => num == 2 ? 2 : num + 1);

    }
    function handleleft() {
        setScroll((prev) => prev == 0 ? 0 : prev - 600);
        setCout((num) => num == 0 ? 0 : num - 1);
    }


    return (
        <div style={{ marginTop: "300px", width: "100%", height: "50%", overflow: "hidden" }}>
            <div style={{ width: "190%", height: "100%", display: "flex", marginLeft: `${-scroll}px`, transition: "all 0.90s", }}>
                {
                    photos.map((x) => {
                        return (
                            <div style={{ width: "600px", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <img src={`${x.link}`} alt="blogs" style={{ width: "100%", height: "400px" }} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='countingsection' style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "9px" }}>
                <p style={{ fontSize: "20px", fontWeight: "700", color: "#392f2f" }}>0{count}/02</p>
                <FaArrowLeft style={{ fontSize: "30px", color: "#392f2f", cursor: "pointer" }} onClick={handleleft} />
                <FaArrowRight style={{ fontSize: "30px", color: "#392f2f", cursor: "pointer" }} onClick={handleright} />
            </div>
        </div>
    )
}

export default Downsection