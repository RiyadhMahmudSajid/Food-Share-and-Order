import React from 'react';
import banner from "../assets/Banner.jpg"
const Home = () => {
    return (
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
    );
};

export default Home;