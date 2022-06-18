import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faSnapchat } from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <footer className="footing">
      <div className="icon">
      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faSnapchat}></FontAwesomeIcon>
      </div>
    </footer>
  )
}
