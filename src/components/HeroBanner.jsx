import React from 'react'; // Assuming 'Typewriter' is imported elsewhere
import { Typewriter } from 'react-simple-typewriter'; // Make sure this import is correct based on your setup
import banner from '../assets/banner.jpg'; // Ensure your banner image path is correct

const HeroBanner = () => {
    return (
        <div
            className="hero min-h-[75vh] md:min-h-[85vh] relative" // Increased min-height and added 'relative' for overlay
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover', // Ensure the image covers the area
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent image repetition
            }}
        >
            {/* Darker and more refined overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* More controlled overlay */}

            {/* Content centered vertically and horizontally */}
            <div className="hero-content text-white text-center z-10 p-4 max-w-4xl mx-auto"> {/* Added z-10 for layering, max-w for content width */}
                <div className="px-4 py-8 md:py-12"> {/* Added more vertical padding for content */}
                    <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                        {/* Typewriter part remains. Using 'text-teal-400' for branding consistency if you adopted the last color suggestion, otherwise use 'text-orange-500' */}
                        Discover & Share {' '}
                        <span className='text-teal-400'>
                            <Typewriter
                                words={['Delicious', 'Unique', 'Spicy', 'Tasty']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={40} // Slightly faster
                                deleteSpeed={30} // Slightly faster
                                delaySpeed={800} // Slightly longer delay
                            />
                        </span>{' '}
                        Recipes
                    </h1>
                    <p className="mb-8 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        Join our vibrant community of food enthusiasts. Find new and exciting recipes, share your culinary creations, and connect with people who share your passion for food.
                    </p>
                    {/* Optional: Add a call-to-action button */}
                    <button className="btn btn-lg bg-teal-500 text-white border-none hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Explore Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;