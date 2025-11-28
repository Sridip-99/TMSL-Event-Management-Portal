import Navbar from './Navbar'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='z-50 w-full h-[var(--header-height)] border-b-[0.25px] border-gray-700 px-[1.2rem] py-[0.8rem] sticky top-0 bg-[#222] flex justify-center items-center shadow-[0_0_20px_#111]'>
      <div className='max-w-6xl relative w-full h-full flex flex-row items-center justify-between'>
        <input type="checkbox" id="checkbox" />
        <a href='https://tmslevents.netlify.app/#home' className='logo w-fit h-[50px] lg:h-2rem p-auto flex items-center justify-center bg-red cover overflow-hidden'>
          <img src="./Logo.webp" alt="Techno Main Salt Lake Logo" className='w-auto h-full'/>
        </a>
        <Navbar />
        <div className='link-container flex justify-center align-center gap-[1rem]'>
          <Link to="/login" className="px-[0.8rem] py-[0.4rem] rounded-full border-[0.25px] border-yellow-700 text-yellow-500 hover:text-yellow-300 hover:bg-gray-800 hidden md:flex items-center duration-[0.3s] ease-in-out">
            Log in
          </Link>
          <Link to="/signup" className="px-[0.8rem] py-[0.4rem] rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 hover:text-gray-200 hidden md:flex items-center duration-[0.3s] ease-in-out">
            Sign up
          </Link>
          <div id='hamburger' className="hamburger lg:hidden">
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header