import React from "react"
import ProfilePicture from "../images/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Info() {
  return (
    <div className="info">
      <img src={ProfilePicture} className ="profile-pic"/>
      <h1 className="title">Erika Kawashima</h1>
      <h2 className="under-title">Developer</h2>
      <h3 className="website">coolwebsite.website</h3>
      <button className="email"> <FontAwesomeIcon icon={faEnvelope} className="envelope"></FontAwesomeIcon>Email</button>
      <button className="linked-in"><FontAwesomeIcon icon={faLinkedin} className="link"></FontAwesomeIcon>LinkIn</button>
    </div>
  )
}
