import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function SocialIcon() {
  return (
    <ul className="social-icons pt-3">
      <li className="social-item">
        <a
          rel="noreferrer"
          className="social-link"
          href="https://twitter.com/danielbui_12"
          target="_blank"
        >
          <FaXTwitter />
        </a>
      </li>
      <li className="social-item">
        <a
          rel="noreferrer"
          className="social-link"
          href="https://t.me/danielbui12"
          target="_blank"
        >
          <LiaTelegramPlane />
        </a>
      </li>
      <li className="social-item">
        <a
          rel="noreferrer"
          className="social-link"
          href="https://www.linkedin.com/in/daniel-nan"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-item">
        <a
          rel="noreferrer"
          className="social-link"
          href="https://github.com/danielbui12"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcon