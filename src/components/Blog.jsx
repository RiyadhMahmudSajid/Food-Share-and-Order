// Blog.jsx

import React from 'react';
import BlogImg1 from '../assets/spices-1.jpg'
import BlogImg2 from '../assets/Feature-.jpg'
import BlogImg3 from '../assets/quick-dinner.jpg'

const blogPosts = [
  {
    id: 1,
    title: '5 Secret Ingredients to Spice Up Your Cooking',
    excerpt: 'Discover how small changes in ingredients can take your dishes to the next level.',
    image: BlogImg1,
    date: 'June 25, 2025',
  },
  {
    id: 2,
    title: 'Healthy Breakfast Recipes You Must Try',
    excerpt: 'Start your day right with these quick, healthy, and delicious breakfast ideas.',
    image: BlogImg2,
    date: 'June 22, 2025',
  },
  {
    id: 3,
    title: 'Top 10 Easy Dinner Recipes for Busy Nights',
    excerpt: 'Don’t compromise taste while saving time — these dinner ideas are here to help!',
    image: BlogImg3,
    date: 'June 20, 2025',
  },
];

const Blog = () => {
  return (
    <div className="bg-orange-50 py-12 px-4 min-h-screen mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">Our Latest Blog</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore recipes, cooking tips, and healthy food inspirations to enhance your kitchen journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-orange-700">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-700 mb-3">{post.excerpt}</p>
                <button className="text-orange-600 font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
