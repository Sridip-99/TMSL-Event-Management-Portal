import { ImageData } from '../assets/images/imagedata'; 
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiHeartStraightDuotone } from "react-icons/pi";

const Footer = () => {
  return (
      <footer className='z-30 bg-[#222] pt-[20px] overflow-hidden relative border-t-[0.25px] border-gray-700'>
        <div className="max-w-6xl mx-auto py-[20px] px-[1rem] lg:px-0 flex align-center items-center gap-[20px]">
          <div className="logo-img-container w-[100px] h-auto flex items-center justify-center">
            <img src="./favicon.ico" alt="Techno India Logo" className="w-full h-full" />
          </div>
          <div className="footer-text-container w-full h-full flex flex-col items-start justify-center text-left">
            <h1 className="text-2xl text-gray-100 md:text-4xl"><span className="tapered">Techno Main Salt Lake</span></h1>
            <p className={`text-sm text-gray-300 max-w-2xl`}>
              The Techno Main Salt Lake Event Management System is the central hub for all campus activities, designed to streamline the discovery, registration, and management of departmental, club, and collaborative events. This platform ensures seamless communication between organizers and attendees, fostering a vibrant and engaged student community across all academic and cultural domains.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-[20px] px-[1rem] lg:px-0 border-t-[0.25px] border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
            <div className="p-6 rounded-xl text-center">
              <h2 className="text-xl text-gray-100 md:text-2xl border-b-[0.15px] border-yellow-700" >Our Clubs</h2>
              <ul className="flex flex-wrap items-center justify-center gap-[1rem] py-6">
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://www.geekonix.org/" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.geekonix}`} alt="GEEKONIX LOGO" className="w-full h-auto" />
                  </a>
                </li>
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://anakhronos.in/" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.ankuran}`} alt="ANKURAN LOGO" className="w-full h-auto" />
                  </a>
                </li>
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://www.linkedin.com/in/inspiritmindspark" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.mindspark}`} alt="inspiritmindspark LOGO" className="w-full h-auto" />
                  </a>
                </li>
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://www.facebook.com/samaritansnss" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.samaritans}`} alt="SAMARITANS LOGO" className="w-full h-auto" />
                  </a>
                </li>
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://www.linkedin.com/company/iictmsl/" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.iic}`} alt="IIC LOGO" className="w-full h-auto" />
                  </a>
                </li>
                <li className="w-[50px] h-auto bg-[#00000099] backdrop-filter-[blur(5px)] p-1 rounded-full overflow-hidden border-[0.15px] border-[#dfe7ff] flex items-center justify-center opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <a href="https://www.linkedin.com/company/samarthtmsl/" target="_blank" rel="noopener noreferrer" className="w-full h-auto flex items-center justify-center rounded-full overflow-hidden">
                    <img src={`${ImageData.samarth}`} alt="SAMARTH LOGO" className="w-full h-auto" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl text-center">
              <h2 className="text-xl text-gray-100 md:text-2xl border-b-[0.15px] border-yellow-700" >Quick Links</h2>
              <ul className="flex flex-col items-center justify-center text-sm py-6">
                <li className="w-full text-gray-400 p-2 opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="/#Events">Events</a></li>
                <li className="w-full text-gray-400 p-2 border-t-[0.15px] border-[#333] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="/DepartmentalClubs">Departmental Clubs</a></li>
                <li className="w-full text-gray-400 p-2 border-t-[0.15px] border-[#333] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="/OtherClubs">Non-Departmental Clubs</a></li>
                <li className="w-full text-gray-400 p-2 border-t-[0.15px] border-[#333] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="/signup">Sign Up</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-xl text-center">
              <h2 className="text-xl text-gray-100 md:text-2xl border-b-[0.15px] border-yellow-700" >Our Socials</h2>
              <ul className="flex items-center justify-center gap-[1rem] text-2xl py-6">
                <li className="bg-[#1877F2] p-2 rounded-full border-[0.15px] border-[#dfe7ff] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="https://www.facebook.com/tigkolkata" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li className="bg-[linear-gradient(30deg,#a100a1,#b13057)] p-2 rounded-full border-[0.15px] border-[#ff64bc] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="https://www.instagram.com/technoindiauniversity/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li className="bg-[#0077B5] p-2 rounded-full border-[0.15px] border-[#7caeff] opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="https://in.linkedin.com/company/techno-india-group" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li className="bg-[#192734] p-2 rounded-full border-[0.15px] border-gray-300 opacity-85 transition-opacity duration-300 ease-in-out hover:opacity-100"><a href="https://twitter.com/tiukolkata" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1a1a1a] mx-auto py-[10px] lg:py-[20px] px-[1rem] lg:px-0 flex items-center justify-center text-center">
          <p className={`max-w-6xl text-sm text-gray-300 max-w-2xl inline text-center`}>
            &copy; ALL RIGHTS RESERVED @ <a href="https://www.ticollege.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-text duration-300 ease-in-out hover:text-gray-100">TECHNO MAIN SALTLAKE</a> | Designed & Developed with <PiHeartStraightDuotone style={{display:"inline", color:"#ff004cff"}} /> by <a href="https://sridiptah99.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-text duration-300 ease-in-out hover:text-gray-100">College Ex. Student</a>
          </p>
        </div>
    </footer>
  )
}

export default Footer