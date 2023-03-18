import React from 'react'

import Card from '../../../shared/Card'

// import logo from '../../../assets/logo.png'

import './Home.css'
import useHospital from '../../../context/HospitalContext';

function Home() {
    const { emerhospital } = useHospital()
    if (emerhospital)
        return (
            <>

                <div className="contain">
                    <div className="primary--text"> Hospitals </div>
                    <div className="cards">
                        <ul>
                            {
                                emerhospital.map(
                                    (ele) => {
                                        return (
                                            <>
                                                <li key={emerhospital._id}>
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
                        </ul>
                    </div>
                </div>
            </>
        )
}

export default Home