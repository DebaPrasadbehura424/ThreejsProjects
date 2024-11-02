import React, { useState } from 'react'

let photoswap = [
  {
    id: 1,
    content: "Blog",
  },
  {
    id: 2,
    content: "News Letter",
  },
  {
    id: 3,
    content: "Link in Bio",
  },
  {
    id: 4,
    content: "Vedio",
  },
  {
    id: 5,
    content: "Commerce",
  },
  {
    id: 6,
    content: "Course",
  },
]

let pictures = [
  {
    id: 1,
    picture: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    picture: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    picture: "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    picture: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    picture: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    picture: "https://images.pexels.com/photos/459403/pexels-photo-459403.jpeg?auto=compress&cs=tinysrgb&w=600",
  },



]




function AboutPhoto() {
  const [select, setSelect] = useState(1);
  return (
    <div style={{ width: "100%", height: "100%", fontFamily: "Gloria Hallelujah, cursive" }}>
      <div style={{ width: "96%", height: "40vh", backgroundColor: "#1e1e1e", lineHeight: "0px", padding: "30px", color: "#fff" }}>
        <p style={{ fontSize: "70px", padding: "17px" }}> New Features do it all  </p>
        <p style={{ fontSize: "70px", padding: "17px" }}>With Blog App</p>
      </div>
      <div style={{ width: "100%", height: "90vh", display: "grid", gridTemplateColumns: "repeat(2,1fr)", backgroundColor: "#1e1e1e" }}>

        <div style={{ width: "30vw", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff" }}>
          {
            photoswap.map((x, index) => {
              return (
                <div
                  onMouseEnter={function handlephoto() {
                    setSelect(x.id);
                  }}>
                  <h1 style={{
                    fontSize: `${x.id == select ? 40 : 35}px`, transition: "all 0.5s ease-in-out",cursor:"pointer",
                    color: `${x.id == select ? '#fff' : '#757a79' }`
                  }}>{x.content}</h1>

                </div>
              )
            })
          }
        </div>
        <div style={{ width: "65vw", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", }}>
          <div style={{ width: "83%", height: "65vh", overflow: "hidden", transition: "all 0.8s ease-in-out" }}>

            {
              pictures.map((y) => {
                return (
                  select == y.id ? <img src={y.picture} alt="about-photo" style={{ height: "100%", borderRadius: "20px", transition: "all 0.8s ease-in-out" }} />
                    : null
                )
              })
            }

          </div>
        </div>






      </div>





    </div>
  )
}

export default AboutPhoto