import React from 'react'

import Card from '../../../shared/Card'

import logo from '../../../assets/logo.png'
import useHospital from '../../../context/HospitalContext'

import './Hospitals.css'

function Hospitals() {

    const {hospital} = useHospital()

  return (
    <>
        <div className="contain">
            <div className="primary--text"> Hospitals </div>
            <div className="cards">
                <ul>
                {
                    hospital.map(
                        (ele) => {
                            return (
                                <li key={ele._id}> 
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