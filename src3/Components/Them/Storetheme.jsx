import React, { useContext, useEffect, useRef, useState } from 'react'
import { Createcontext } from '../home/HomoContext';
import { NavLink } from 'react-router-dom';
import { AiTwotoneRightSquare } from "react-icons/ai";
import { AiTwotoneLeftSquare } from "react-icons/ai";
function Storetheme() {
  const catchpro = useContext(Createcontext);
  const [pro, setPro] = useState([]);
  const [pages, setPages] = useState(1);
  const bottomref = useRef(null);
  async function fetchdata() {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=120');
      const data = await res.json();
      if (data && data.products) {
        setPro(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0, left: 0, behavior: "smooth"
    })
  }, [pages])

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div style={{ display: 'grid', paddingLeft: "100px", gridTemplateColumns: "repeat(4,1fr)", marginTop: "20px", fontFamily: "Poppins,sans-serif" }} >
      {
        pro.slice(pages * 12 - 12, pages * 12).map((item) => {
          return (
            <div style={{ width: "290px", height: "300px", border: "1px dotted #1e1e1e", marginBottom: "40px" }}>

              <div style={{ width: "100%", height: "230px", display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column" }}>
                <NavLink to="/storeclick">
                  <img src={item.thumbnail} alt="themes" style={{ width: "80%", padding: "30px" }}
                    onClick={function handlepro() {
                      catchpro.Setshowbrand([{
                        links: item.thumbnail,
                        tity: item.title,
                        war: item.warrantyInformation,
                        qr: item.meta.qrCode,
                        descrip: item.description,
                        cat: item.category,
                        brand: item.brand,
                        stock: item.stock,
                        price: item.price,
                        rating: item.rating,
                      }])
                    }} />
                </NavLink>
                <p>{item.brand}</p>
              </div>
            </div>
          )
        })
      }
      <div style={{ height: "50px", display: "flex", alignItems: "center", position: "absolute", top: "170%", left: "35%", marginBottom: "20px" }}>
        <AiTwotoneLeftSquare style={{ width: "50px", height: "50px" }} onClick={() => setPages(pages == 1 ? 1 : pages - 1)} />
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 1 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(1)}>1</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 2 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(2)}>2</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 3 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(3)}>3</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 4 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(4)}>4</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 5 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(5)}>5</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 6 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(6)}>6</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 7 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(7)}>7</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 8 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(8)}>8</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 9 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(9)}>9</button>
        <button style={{ width: "40px", height: "40px", backgroundColor: `${pages == 10 ? '#7c73e6' : '#E5E5E5'}` }} onClick={() => setPages(10)}>10</button>
        <AiTwotoneRightSquare style={{ width: "50px", height: "50px" }} onClick={() => setPages(pages == 10 ? 10 : pages + 1)} />
      </div>
      <div ref={bottomref}></div>
    </div>

  )
}

export default Storetheme