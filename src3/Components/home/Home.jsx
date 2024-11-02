import React from 'react'
import Herosection from './Herosection'
import Searchsection from './Searchsection'
import Downsection from './Downsection'
import Information from './Information'
import Scrab from './scroller/Scrab';
import Scard2 from './scroller/Scard2'
import Scard3 from './scroller/scard3'
import musix from '../../audio/walen.mp3';
import { Createcontext } from './HomoContext'
import { useContext } from 'react'
import Company from './Company'
import Foot from './Foot'
function Home() {
    const create = useContext(Createcontext);
    let a = create.musicians;
    a = new Audio(musix);
    a.play();
    return (
        <>
            <Searchsection />
            <Herosection />
            <Downsection />
            <Information />
            <Scrab />
            <Scard2 />
            <Scard3 />
            <Company />
            <Foot />
        </>
    )
}

export default Home