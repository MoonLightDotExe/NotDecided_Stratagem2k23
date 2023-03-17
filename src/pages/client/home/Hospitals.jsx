import React from 'react'

import Card from '../../../shared/Card'

import DATABASE from '../../../data/MOCK';
import logo from '../../../assets/logo.png'

import './Hospitals.css'

function Hospitals() {
  return (
    <>
        <div className="contain">
            <div className="primary--text"> Hospitals </div>
            <div className="cards">
                <ul>
                {
                    DATABASE.map(
                        (ele) => {
                            return (
                                <li key={DATABASE.id}> 
                                    <Card
                                        img={logo}
                                        name={ele.name}
                                        type={ele.type}
                                        wait={ele.queue}
                                        location={ele.address}
                                    />
                                </li>
                            )
                        }
                    )
                }
                </ul>
            </div>
        </div>
    </>
  )
}

export default Hospitals