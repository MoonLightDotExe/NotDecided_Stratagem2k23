import React from 'react'
import { useState } from 'react'

import './Emergency.css'

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

    const [emer , setEmer] = useState('');

  return (
    <>
        <div className="new">
            <div className="name">select emergency type</div>
            <ul className="elements">
                {
                    EMERGENCIES.map((e)=>{
                        return(
                            <li key={e.id} > 
                                <div className="card_new" onClick={()=>{ setEmer(e.type) }}>
                                    {e.type}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Emergency