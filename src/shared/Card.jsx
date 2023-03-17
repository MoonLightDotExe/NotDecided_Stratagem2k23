import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.png'
import './Card.css'

function Card({ img, name, type, wait, location, id }) {
  return (
    <NavLink to={`/${id}`}>
      <div className="card">
        <div className="a2">
          <div className="name">{name}</div>
          <div className="type">{type}</div>
          <div className="wait">WAITING TIME: {wait}</div>
        </div>
        <div>
          <div className="location">{location}</div>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#EB455F" className="bi bi-play-circle" viewBox="0 0 16 16" name="icon">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Card