import React, { useEffect, useState } from 'react';
import banner from "../assets/Banner.jpg"
import Featured from './Featured';
import { motion } from 'framer-motion';


const Home = () => {
    const [topRecipes, setTopRecipes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/top-food')
            .then(res => res.json())
            .then(data => setTopRecipes(data));
    })

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${banner})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover & Share Tasty Recipies</h1>
                        <p className="mb-5">
                            Join our community of food enthusiasts . Find new recipes, share your creation and connect with people who share passion
                        </p>
                        <button className="btn btn-primary">Show All</button>
                    </div>
                </div>


            </div>
            <section >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        topRecipes.map((topRecipe, index) => <Featured key={index} topRecipe={topRecipe}></Featured>)
                    }
                </div>

            </section>
            <section>
                <motion.section
                    className='py-16 bg-base-200 text-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='text-3xl font-bold mb-6'>Why Choose Us</h2>
                    <div className='flex flex-wrap justify-center gap-8'>
                        <div className='card w-80 bg-white shadow-md p-6'>
                            <h3 className='text-xl font-semibold mb-2'>Verified Donors</h3>
                            <p>We verify each donor to ensure safe and healty food delivery</p>
                        </div>
                        <div className='card w-80 bg-white shadow-md p-6'>
                            <h3 className='text-xl font-semibold mb-2'>Real-time Update</h3>
                            <p>Track your food request and donation in realtime</p>
                        </div>
                        <div className='card w-80 bg-white shadow-md p-6'>
                            <h3 className='text-xl font-semibold mb-2'>Community Support</h3>
                            <p>Join a growing community of helpful people who care</p>
                        </div>

                    </div>
                </motion.section>
            </section>
           <section className='py-16'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-purple-700 md-4'>❤️What People Say</h2>
                <p className='text-gray-600'>Real experience form our users</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6'>
                <div className='bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-400'>
                    <div className='flex flex-col items-center text-center'>
                        <img className='w-20 h-20 rounded-full border-4 border-pink-300 mb-4' src="https://i.ibb.co/bjqv46YM/tipped-ear-4.webp" alt=""  />
                        <h3 className='text-lg font-semibold text-purple-700'>John Cina</h3>
                        <p className='text-gray-600 mt-2 text-sm'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-400'>
                    <div className='flex flex-col items-center text-center'>
                        <img className='w-20 h-20 rounded-full border-4 border-pink-300 mb-4' src="https://i.ibb.co/6cQQHFgW/cardinal-bird-branch.jpg" alt=""  />
                        <h3 className='text-lg font-semibold text-purple-700'>Hanif</h3>
                        <p className='text-gray-600 mt-2 text-sm'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-400'>
                    <div className='flex flex-col items-center text-center'>
                        <img className='w-20 h-20 rounded-full border-4 border-pink-300 mb-4' src="https://i.ibb.co/sdkxGgmK/trump.jpg" alt=""  />
                        <h3 className='text-lg font-semibold text-purple-700'>Randy</h3>
                        <p className='text-gray-600 mt-2 text-sm'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
           </section>
        </div>
    );
};

export default Home;