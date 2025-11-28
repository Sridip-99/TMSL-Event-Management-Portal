const About = () => {
  return (
    <section id='About' className='about pt-[30px]'>
        <h1 className="max-w-6xl mx-auto px-[1rem] lg:px-0 text-4xl"><span className="tapered">About Us</span></h1>
        <div className="max-w-6xl mx-auto py-[30px] px-[1rem] lg:px-0 flex flex-col lg:flex-row gap-[20px]">
            <div className='text-container'>
                <p>
                    <strong>Techno Main Salt Lake</strong> is home to a vibrant community of students who are actively involved in various clubs and societies. 
                    These clubs organize a plethora of events and festivals throughout the year, <strong>providing students with opportunities to showcase their talents and creativity</strong>. 
                    Our event management portal serves as a <strong>centralized platform</strong> to <strong>manage</strong> and <strong>showcase</strong> these events. Whether you're a participant looking to <strong>register</strong> for an event or an <strong>organizer seeking to promote your club's fest</strong>, our portal has you covered. 
                    For those eager to participate, the portal provides information about ongoing events, including details about the venue, schedule, and registration process. Stay updated with the latest happenings and make sure you don't miss out on any exciting opportunities. Planning ahead? Explore the upcoming events section to get a sneak peek into what's in store. Mark your calendars and prepare to be a part of the thrilling experiences that our clubs have in store for you. <strong>Join us on this journey of creativity</strong>, <strong>innovation</strong>, and <strong>camaraderie</strong> as we celebrate the diverse talents of the Techno Main Saltlake community.
                    Dive into the world of events and let your talents shine!
                </p>
            </div>
            <div className='image-container min-w-[280px] min-h-[280px] flex justify-center items-center border-[2px] border-white rounded-[50%] cover'>
                <img src="./Logo.webp" alt="About us section image" className="w-full h-auto cover" />
            </div>
        </div>
    </section>
  )
}

export default About