import React from 'react'

import Card from '../../../shared/Card'

import logo from '../../../assets/logo.png'
import useHospital from '../../../context/HospitalContext'

import './Hospitals.css'

function Hospitals() {

  const {hospital} = useHospital(); 

  if(hospital)
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
                                <li key={ele.id}> 
                                    <Card
                                        name={ele.name}
                                        type={ele.type}
                                        queue={ele.queue}
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