import "./HeroSection.css";
import firefox from "../assets/firefox.png";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitterx.svg";
import linkdin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import youtube from "../assets/youtube.svg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-main margin-bottom-sml">
        <img src={firefox} alt="Mozilla firefox club logo" className="img" />
        <h1 className="heading-primary text-center">Mozilla Firefox Club</h1>
      </div>
      <p className="margin-bottom-big text text-center">
        VIT Bhopal University
      </p>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <img src={whatsapp} alt="whatsapp logo" className="icon" />
            <a
              href="https://chat.whatsapp.com/FI6DFZeVMPRLAaXP1xliSd"
              className="nav-link"
            >
              WhatsApp
            </a>
          </li>
          <li className="nav-item">
            <img src={instagram} alt="instagram logo" className="icon" />
            <a
              href="https://instagram.com/mozillafirefox.vitbhopal"
              className="nav-link"
            >
              Instagram
            </a>
          </li>
          <li className="nav-item">
            <img src={linkdin} alt="linkdin logo" className="icon" />
            <a
              href="https://www.linkedin.com/company/mozilla-firefox-club-vit-bhopal"
              className="nav-link"
            >
              Linkdin
            </a>
          </li>
          <li className="nav-item">
            <img src={twitter} alt="twitter logo" className="icon" />
            <a href="https://twitter.com/MFCVITB" className="nav-link">
              Twitter
            </a>
          </li>
          <li className="nav-item">
            <img src={discord} alt="discord logo" className="icon" />
            <a href="https://discord.com/invite/3a2J53fN" className="nav-link">
              Discord
            </a>
          </li>
          <li className="nav-item">
            <img src={youtube} alt="youtube logo" className="icon" />
            <a
              href="https://youtube.com/channel/UCpjSQPsGfRA4BdyTmic6Ofg"
              className="nav-link"
            >
              Youtube
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeroSection;
