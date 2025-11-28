import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const closeMenu = () => {
    // Finds the hidden input by its ID and unchecks it to close the mobile main menu
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.checked = false;
    }
};

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    // State to handle the visibility of the Clubs submenu on mobile/tablet
    const [isClubsOpen, setIsClubsOpen] = useState(false);

    const toggleClubsMenu = (e) => {
        // Prevent event from bubbling up and potentially causing issues
        e.preventDefault();
        // Toggle the state only if the screen is small (mobile/tablet)
        if (window.innerWidth < 1024) { // 1024px is Tailwind's 'lg' breakpoint
            setIsClubsOpen(prev => !prev);
        }
    };
    
    const closeClubsMenu = () => {
        setIsClubsOpen(false);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Normalize ID for comparison (e.g., 'Home' -> 'home')
                    setActiveSection(entry.target.id.toLowerCase());
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);
    
    // Determine the visibility class for the submenu based on state (mobile)
    // For desktop (lg), we use CSS hover.
    const clubMenuVisibility = isClubsOpen ? 'flex' : 'hidden';

    return (
        <div className='navbar bg-[#222] p-[20px] w-full lg:w-fit hidden fixed left-0 top-[var(--header-height)] lg:relative lg:top-0 lg:p-0 lg:flex flex-col align-center justify-center gap-[20px] md:gap-0'>
            <nav>
                <ul className='flex flex-col lg:flex-row gap-[10px] lg:gap-[1rem] items-center justify-center'>
                    <li className='w-full flex flex-col items-center justify-center md:justify-start'><a href="/#Home" onClick={closeMenu} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out ${activeSection === 'home' ? 'bg-red-800 text-gray-100' : ''}`}>Home</a></li>
                    <li className='w-full flex flex-col items-center justify-center md:justify-start'><a href="/#About" onClick={closeMenu} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out ${activeSection === 'about' ? 'bg-red-800 text-gray-100' : ''}`}>About</a></li>
                    <li className='w-full flex flex-col items-center justify-center md:justify-start'><a href="/#Events" onClick={closeMenu} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out ${activeSection === 'events' ? 'bg-red-800 text-gray-100' : ''}`}>Events</a></li>
                    
                    {/* Club Dropdown: Set as a group for desktop hover functionality */}
                    <li className='w-full relative flex flex-col items-center justify-center md:justify-start group'>
                        <button 
                            onClick={toggleClubsMenu} 
                            className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center gap-[0.2rem] text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out ${activeSection === 'clubs' ? 'bg-red-800 text-gray-100' : ''}`}
                        >
                            Clubs 
                            {/* Conditional Arrow Icon for Mobile/Tablet */}
                            <span className="lg:hidden">
                                {isClubsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                            {/* Arrow icon for Desktop (changes on hover via group-hover utility on the parent li) */}
                            <span className="hidden lg:block lg:group-hover:hidden"><IoIosArrowDown /></span>
                            <span className="hidden lg:group-hover:block"><IoIosArrowUp /></span>

                        </button>
                        {/* Submenu UL: Mobile visibility controlled by state. Desktop visibility by lg:group-hover:flex */}
                        <ul 
                            className={`p-[0.2rem] lg:pt-[2rem] ${clubMenuVisibility} lg:hidden lg:group-hover:flex 
                                bg-[linear-gradient(0deg,#22222299,#222222dd)] backdrop-blur-sm 
                                border-none lg:border-b-[1px] lg:border-solid lg:border-gray-700
                                relative top-auto lg:absolute lg:top-full
                                flex-col lg:gap-[0.2rem] items-center justify-center rounded-3xl w-max lg:shadow-lg`}
                        >
                            <li className='w-full flex flex-col items-center justify-center md:justify-start'>
                                {/* Close main menu and close the clubs submenu on navigation */}
                                <a href="/DepartmentalClubs" onClick={() => { closeMenu(); closeClubsMenu(); }} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out`}>Departmental Clubs</a>
                            </li>
                            <li className='w-full flex flex-col items-center justify-center md:justify-start'>
                                {/* Close main menu and close the clubs submenu on navigation */}
                                <a href="/OtherClubs" onClick={() => { closeMenu(); closeClubsMenu(); }} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out`}>Other Clubs</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li className='w-full flex flex-col items-center justify-center md:justify-start'><a href="/#FAQ" onClick={closeMenu} className={`w-full px-[0.8rem] py-[0.4rem] flex items-center rounded-full justify-center text-red-200 hover:text-gray-100 hover:bg-red-800 duration-[0.3s] ease-in-out ${activeSection === 'faq' ? 'bg-red-800 text-gray-100' : ''}`}>FAQ</a></li>
                </ul>
            </nav>
            
            <div className='link-container flex md:hidden justify-center align-center gap-[1rem]'>
                <Link to="/login" onClick={closeMenu} className="px-[0.8rem] py-[0.4rem] rounded-full border-[0.25px] border-yellow-700 text-yellow-500 hover:text-yellow-300 hover:bg-gray-800 flex items-center duration-[0.3s] ease-in-out">
                    Log in
                </Link>
                <Link to="/signup" onClick={closeMenu} className="px-[0.8rem] py-[0.4rem] rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 hover:text-gray-200 flex items-center duration-[0.3s] ease-in-out">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Navbar