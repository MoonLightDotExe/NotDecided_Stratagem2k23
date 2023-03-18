import React from 'react'
import { useState } from 'react'

import './Emergency.css'
import useHospital from '../context/HospitalContext'
import Card from '../shared/Card'

function Emergency() {

    const EMERGENCIES = [
        {
            id:1,
            type:'Accidental'
        },
        {
            id:2,
            type:'Maternal'
        },
        {
            id:3,
            type:'Toxic Chemical Injury'
        },
        {
            id:4,
            type:'Allergical'
        },
        {
            id:5,
            type:'Suicidal'
        },

    ]

    const { emerhospital } = useHospital()

  return (
    <>
        <div className="new">
            <div className="name">select emergency type</div>
            <form className="elements">
                {
                    EMERGENCIES.map((e)=>{
                        return(
                            <li key={e.id} >
                                <label> {e.type} </label>
                                <input type='radio' className="card_new" name='rad'/>
                            </li>
                        )
                    })
                }
            </form>
            <div className="near_me">
                {
                    emerhospital.map(
                        (ele) => {
                            return (
                                <>
                                    <li key={ele.id}>
                                        <Card
                                            name={ele.name}
                                            type={ele.type}
                                            wait={ele.queue}
                                            location={ele.address}
                                            id={ele.id}
                                        />
                                    </li>
                                </>
                            )
                        }
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Emergency