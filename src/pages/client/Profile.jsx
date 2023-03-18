import { useEffect, useRef, useState } from 'react'
import './Profile.css'
import { v4 as uuidv4 } from 'uuid';

function Profile() {

  const name = useRef()
  const loc = useRef()
  const medh = useRef()
  const [ins, setIns] = useState(false)
  const [id, setId] = useState(null)
  

  function PostRequest (){
  fetch('http://localhost:3001/patient'
  ,{
  method : 'POST',
  mode : 'cors',
   body :JSON.stringify({
        id: id,
        name: name.current.value,
        location : loc.current.value,
        medicalHistory: medh.current.value,
        insurance: ins
   }),
  headers : {
   'Content-type' : 'application/json' 
   }})}

   function handleIns(){
    setIns(!ins)
    console.log(id)
   }

   function handleSubmit(){
      setId(uuidv4())
      PostRequest()
   }
   

  return (
    <>
    <div className="profile-page">
      <div className="name-div profile-div">
        <p>Name:</p>
        <input type="text" ref={name}/>
      </div>
      <div className="location-div profile-div">
        <p>Location</p>
        <input type="text" ref={loc}/>
      </div>
      <div className="medical-history profile-div">
        <p>Any Medical History (Optional)</p>
        <textarea name="" id="" cols="60" rows="3" ref={medh}/>
      </div>
      <div className="insurance profile-div">
          <p>Have Insurance?</p>
          <input type="checkbox" onClick={handleIns}/>
      </div>
      <div className="profile-div">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </>
  )
}

export default Profile