import { useState, useEffect } from 'react';

// NOTE: Assuming this file exists and contains the necessary local image paths
import { ImageData } from '../assets/images/imagedata'; 

// =======================================================
// CUSTOM HOOK: useImageLoader
// Handles sequential loading and fallback logic for dynamic images
// =======================================================

/**
 * Attempts to load the image from an array of URLs sequentially.
 * If all URLs fail, it returns the final fallback value (e.g., a color).
 * * @param {string[]} urls - Array of URLs, ordered by priority (highest first).
 * @param {string} finalFallback - The value to use if all URLs fail (e.g., '#333').
 * @returns {string} The URL of the first successfully loaded image, or the finalFallback value.
 */
const useImageLoader = (urls, finalFallback = '#222') => {
  const [loadedUrl, setLoadedUrl] = useState(null);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setLoadedUrl(finalFallback);
      return;
    }

    let isMounted = true;
    
    // Recursive function to try loading images one by one
    const tryLoadImage = (index) => {
      if (index >= urls.length) {
        // All attempts failed, use the final fallback
        if (isMounted) {
          setLoadedUrl(finalFallback);
        }
        return;
      }

      const url = urls[index];
      
      // Use the native Image object to test loading without rendering it
      const img = new Image();

      img.onload = () => {
        if (isMounted) {
          // Success! Set this URL and stop trying
          setLoadedUrl(url);
        }
      };

      img.onerror = () => {
        // Failure, try the next URL in the array
        tryLoadImage(index + 1);
      };

      // Set the source to start the load attempt
      img.src = url;
    };

    tryLoadImage(0);

    return () => {
      isMounted = false;
    };
  }, [urls, finalFallback]);

  return loadedUrl;
};

// =======================================================
// HERO COMPONENT
// =======================================================

const Hero = () => {

  // State for tracking the current active slide
  const [activeIndex, setActiveIndex] = useState(0);

  const slidedata = [
    {
      "heading" : "Event Managment Portal",
      "paragraph": "Welcome to Event-managment Portal of Techno Main Saltlake",
      "link1" : "#about",
      "link1text" : "More Info",
      "imgsrc" : [
        'https://res.cloudinary.com/di0cnkdjy/image/upload/v1764230743/college1_ospooy.webp',
        ImageData.clgimg1, // Local asset fallback
        'https://raw.githubusercontent.com/Sridip-99/TMSL-Event-Management-Portal/refs/heads/main/Frontend/src/assets/images/college1.webp' // GitHub fallback
      ]
    },
    {
      "heading" : "Departmental Events",
      "paragraph": "Stay tuned for exciting departmental events that showcase the talents and achievements of our students.",
      "link1" : "/DepartmentalClubs",
      "link1text" : "Explore Clubs",
      "imgsrc" : [
        'https://res.cloudinary.com/di0cnkdjy/image/upload/v1764230742/college2_nevvv9.webp',
        ImageData.clgimg2, // Local asset fallback
        'https://raw.githubusercontent.com/Sridip-99/TMSL-Event-Management-Portal/refs/heads/main/Frontend/src/assets/images/college2.webp' // GitHub fallback
      ]
    },
    {
      "heading" : "Other Club Events",
      "paragraph": "Experience the diverse and exciting club events that showcase the talents and interests of our student body!",
      "link1" : "/OtherClubs",
      "link1text" : "Explore Clubs",
      "imgsrc" : [
        'https://res.cloudinary.com/di0cnkdjy/image/upload/v1764230740/college3_m43myn.webp',
        ImageData.clgimg3, // Local asset fallback
        'https://raw.githubusercontent.com/Sridip-99/TMSL-Event-Management-Portal/refs/heads/main/Frontend/src/assets/images/college3.webp' // GitHub fallback
      ]
    }
  ];
  
  // Navigation functions
  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % slidedata.length);
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + slidedata.length) % slidedata.length);
  };
  
  // Logic for auto-sliding the carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slidedata.length]);

  return (
    <section id="Home" className="hero h-screen pb-[30px] overflow-hidden relative [clip-path:polygon(0%_0%,100%_0%,100%_96%,0%_100%)]" >
      
      {/* -------------------- Main Sliding Container -------------------- */}
      <div 
        className="h-full flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        {slidedata.map((elem,idx) => {
          
          const backgroundUrl = useImageLoader(elem.imgsrc, '#333');
          
          const backgroundStyle = backgroundUrl 
            ? { backgroundImage: `url('${backgroundUrl}')` } 
            : { backgroundColor: '#333' }; // Fallback color while loading/if failed
          
          // Check if this is the active slide to trigger animations
          const isActive = idx === activeIndex;

          return (
            <div 
              key={idx} 
              // w-screen and flex-shrink-0 are essential for the horizontal slide effect
              className={`carousel-item bg-cover bg-center h-screen w-screen flex-shrink-0 flex items-center justify-center relative`} 
              style={backgroundStyle} 
            >
              <div className="absolute inset-0 bg-black/60"></div> {/* Optional: Add a dark overlay for text readability */}

              <div className="relative max-w-6xl mx-auto py-[30px] px-[1rem] lg:px-0 flex flex-col gap-[20px] text-center text-white z-10">
                {/* Heading Animation: Slight upward move and fade in */}
                <h1 className={`text-4xl text-white sm:text-6xl font-extrabold transition-all duration-1000 ease-out 
                                ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                  {elem.heading}
                </h1>
                
                {/* Paragraph Animation: Slight upward move and fade in with a small delay */}
                <p className={`text-lg text-gray-300 sm:text-xl max-w-2xl mx-auto transition-all duration-1000 ease-out delay-150 
                              ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                  {elem.paragraph}
                </p>
                
                {/* Buttons Container */}
                <div className="flex items-center justify-center gap-[1rem] mt-6">
                  
                  {/* Link 1 Animation: Scale up and fade in */}
                  <a
                    href={elem.link1}
                    className={`
                      text-[#ffd336e1]
                      shadow-[0.2px_0.2px_6px_#b1131099]
                      bg-[#b11310aa]
                      border-[0.2px] border-solid border-[#b11310]
                      text-[1rem] py-[0.8rem] px-[1.5rem]
                      rounded-[40px] font-semibold font-[titilliumweb-smbd]
                      transition-all duration-500 ease-in-out
                      hover:shadow-[0_0_12px_#ff1f1f50]
                      hover:delay-2
                      hover:bg-[#b11310dd]
                      ${isActive ? 'scale-100 opacity-100 delay-500' : 'scale-90 opacity-0'}
                    `}
                  >
                    {elem.link1text}
                  </a>

                  
                  {/* Link 2 Animation: Scale up and fade in with a larger delay */}
                  <a href= "#Events" 
                     className={`text-gray-300 shadow-[0.2px_0.2px_6px_#d4630d60] will-change-[color,background] 
                                 bg-[#00000050] border-[0.2px] border-solid border-[#f8bc2494] 
                                 transition-all duration-700 ease-out text-[1rem] py-[0.8rem] px-[1.5rem] rounded-[40px] font-semibold font-[titilliumweb-smbd]
                                 hover:text-white hover:bg-[#00000090] hover:shadow-[0_0_12px_#d4630d60]
                                 ${isActive ? 'scale-100 opacity-100 delay-500' : 'scale-90 opacity-0'}`}
                  >
                    Ongoing Events
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* -------------------- Navigation Arrows -------------------- */}
      
      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/30 hover:bg-black/50 transition-colors duration-200 rounded-r-full text-white focus:outline-none hidden sm:block"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/30 hover:bg-black/50 transition-colors duration-200 rounded-l-full text-white focus:outline-none hidden sm:block"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* -------------------- Indicator Dots -------------------- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slidedata.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
              ${activeIndex === index ? 'bg-[#ffd336e1] scale-125' : 'bg-gray-400/80 hover:bg-gray-200'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
    </section>
  )
}

export default Hero