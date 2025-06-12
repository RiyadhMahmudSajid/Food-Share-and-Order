import React, { useEffect, useState } from 'react';
import banner from "../assets/Banner.jpg"
import Featured from './Featured';

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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        topRecipes.map((topRecipe, index) => <Featured key={index} topRecipe={topRecipe}></Featured>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;