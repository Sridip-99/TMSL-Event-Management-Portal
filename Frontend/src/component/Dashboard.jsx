import Hero from "./Hero"
import About from "./About"
import FAQ from "./FAQ"
import Teams from "./Teams"
const Dashboard = () => {
  return (
    <>
    <Hero />
    <About />
    <section id='Events' className='events bg-gray-800 pt-[30px] overflow-hidden relative [clip-path:polygon(0%_0%,100%_20%,100%_80%,0%_100%)]'>
        <h1 className="max-w-6xl mx-auto px-[1rem] lg:px-0 text-4xl"><span className="tapered">Ongoing Events</span></h1>
        <div className="max-w-6xl mx-auto py-[30px] px-[1rem] lg:px-0 flex flex-col lg:flex-row gap-[20px]">

        </div>
    </section>
    <FAQ />
    <Teams />
    </>
  )
}

export default Dashboard