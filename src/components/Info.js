import React from "react"
import ProfilePicture from "../images/profile.png"

export default function Info() {
  return (
    <div>
      <img src={ProfilePicture} className ="profile-pic"/>
      <h1>Erika Kawashima</h1>
      <h2>Developer</h2>
      <h3>coolwebsite.website</h3>
      <button className="email">Email</button>
      <button className="linked-in">LinkIn</button>
    </div>
  )
}
