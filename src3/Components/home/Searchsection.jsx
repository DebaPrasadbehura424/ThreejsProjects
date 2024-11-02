import React, { useContext, useEffect } from 'react'
import { FaDownload } from "react-icons/fa";
import { Createcontext } from './HomoContext';
import music from '../../audio/hare.wav';


let search = [
    {
        id: 1,
        place: "Location",
        want: <input type='text' placeholder='Add Loaction' id='Location' />
    },
    {
        id: 2,
        place: "Cheak in",
        want: <input type='date' placeholder='add date' id='adddate' />
    },
    {
        id: 3,
        place: "Image",
        want: <input type='type' placeholder='photo url...' id='imageslink' />
    },
    {
        id: 4,
        place: "Description",
        want: <input type='text' placeholder='add guests' id='guests' />
    },
    {
        id: 5,
        place: <FaDownload id='upload' />,
    },
]


function Searchsection() {
    const create = useContext(Createcontext);
  
    function handleper(event) {
        event.preventDefault();
        document.getElementById('upload').style.cursor = "pointer";
        let Loaction = document.getElementById('Location').value;
        let adddate = document.getElementById('adddate').value;
        let imageslink = document.getElementById('imageslink').value;
        let guests = document.getElementById('guests').value;
        document.getElementById('upload').classList.add('flipit');
        create.setLocdata([...create.locdata, { name: Loaction, date: adddate, srclink: imageslink, Guests: guests },])
        setTimeout(() => {
            document.getElementById('upload').classList.remove('flipit');
        }, 1000);

        let song = new Audio(music);
        song.play();

    }




    return (
        <div className='seachdrop'>
            {
                create.seadrop == false ? null
                    :
                    <ul className='searchcontainer'>
                        {
                            search && search.length ?
                                search.map((lists, index) => {
                                    return (
                                        <li key={lists.id} className={`${index == 4 ? 'list_active ' : 'listsimple'}`}>
                                            <h4 onClick={`${index == 4}` && handleper}>{lists.place}</h4>
                                            <div>{lists.want}</div>
                                        </li>
                                    )
                                })
                                : null
                        }
                    </ul>
            }
            <div style={{ color: "#fff", position: "absolute", bottom: "2%", left: "2%" }}>
                <h1 style={{ fontSize: "50px" }}>Make your own blog</h1>
                <h3 style={{ fontSize: "30px" }}>Post Your Knowledge and spread your Knowledge.</h3>
            </div>
        </div>
    )
}

export default Searchsection







