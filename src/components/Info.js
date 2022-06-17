import React from "react"
import ProfilePicture from "../images/profile.png"

export default function Info() {
  return (
    <div className="info">
      <img src={ProfilePicture} className ="profile-pic"/>
      <h1 className="title">Erika Kawashima</h1>
      <h2 className="under-title">Developer</h2>
      <h3 className="website">coolwebsite.website</h3>
      <button className="email">Email</button>
      <button className="linked-in">LinkIn</button>
    </div>
  )
}
