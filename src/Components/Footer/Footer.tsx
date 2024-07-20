import './Footer.scss';
import video2 from '../../Assets/video2.mp4';
import appStore from '../../Assets/apple_app.webp';
import googleApp from '../../Assets/google_app.webp';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className="videoDiv">
          <video src={video2} muted autoPlay loop type="video/mp4" className="video"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small>Keep In Touch</small>
              <h2>Travel With US</h2>
            </div>

            <div className="inputDiv flex">
              <input type="text" placeholder='Enter Email Address' className="text" />
              <button className='btn flex' type='submit'>
                <FiSend className='icon' />
                Send
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'><MdTravelExplore className='icon' />
                  Travel</a>
              </div>

              <div className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi explicabo odio vel perspiciatis saepe obcaecati? Velit, unde pariatur aspernatur consectetur obcaecati incidunt ullam dolore eum rerum nihil quis repellendus!
              </div>

              <div className="footerSocials">
                <TbWorldWww className='icon' />
                <FaFacebookF className='icon' />
                <FaInstagram className='icon' />
                <FaLinkedinIn className='icon' />
              </div>
            </div>

            <div className="footerContent flex">
              <div className="footerLinks flex">
                <div className="linkgroup">
                  <span className="groupTitle">
                    Our Agency
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Tourism
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Payment
                  </li>
                </div>

                <div className="linkgroup">
                  <span className="groupTitle">
                    Our Agency
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Tourism
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Payment
                  </li>
                </div>

                <div className="linkgroup">
                  <span className="groupTitle">
                    Our Agency
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Tourism
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Payment
                  </li>
                </div>
              </div>

              <div className="appImagesSection">
                <p>Download Our Applications</p>
                <div className="appImages flex">
                  <img src={appStore} alt="App Store" />
                  <img src={googleApp} alt="Google App" />
                </div>
              </div>
            </div>

            <div className='bottom'>
              <div className='bottom-line'></div>
              <p className='copyright'>&copy; 2024 Ahmad Husirami</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
