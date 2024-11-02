import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
function Sidebar({ side }) {
    return (
        <div className={`d-flex flex-column flex-shrink-0 bg-light w-full h-screen mt-[10px] z-2  absolute `} style={{top:`${side}%`}}>

            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="home" data-bs-original-title="Home">
                        HOME
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link  py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        POST
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        CREATE
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        SHOP
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                        ACCOUNT
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar