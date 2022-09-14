/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsInstagram, BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'

import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="socials">
          <a href="https://www.instagram.com/aliblackeye" target="_blank" rel='noreferrer'>
            <div className="social-item">
              <BsInstagram size={16} color="#fff" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aliblackeye" target="_blank" rel='noreferrer'>
            <div className="social-item">
              <BsLinkedin size={16} color="#fff" />
            </div>
          </a>
          <a href="https://www.github.com/aliblackeye" target="_blank" rel='noreferrer'>
            <div className="social-item">
              <BsGithub size={16} color="#fff" />
            </div>
          </a>
          <a href="https://www.hackerrank.com/ali_blackeye" target="_blank" rel='noreferrer'>
            <div className="social-item">
              <FaHackerrank size={16} color="#fff" />
            </div>
          </a>
          <a href="https://www.youtube.com/aliblackeye" target="_blank" rel='noreferrer'>
            <div className="social-item">
              <BsYoutube size={16} color="#fff" />
            </div>
          </a>

        </div>
        <span className="creator">Created By <span className='creator-name'>Ali Karagöz</span> | All Rights Reserved</span>
      </div>
    </footer>
  )
}
