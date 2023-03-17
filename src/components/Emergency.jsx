import React from 'react'

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
            type:'Alergical'
        },
        {
            id:5,
            type:'Suicidal'
        },

    ]

  return (
    <>
        <div className="emergency">
            <ul className="elements">
                {
                    EMERGENCIES.map((e)=>{
                        return(
                            <li key={e.id} > {e.type} </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Emergency