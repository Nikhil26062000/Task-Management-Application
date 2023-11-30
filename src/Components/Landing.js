import React from 'react';
import { Link } from 'react-router-dom';

// Import your images
// import image1 from './path/to/image1.jpg';
// import image2 from './path/to/image2.jpg';

const LandingPage = () => {
  const quotes = [
    { text: '“The secret of getting ahead is getting started.”', author: 'Mark Twain' },
    { text: '“Your mind is for having ideas, not holding them.”', author: 'David Allen' },
    { text: '“Action is the foundational key to all success.”', author: 'Pablo Picasso' },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-gradient-to-r from-gray-800 to-blue-500 min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        {/* <img src={image1} alt="Image 1" className="mb-8 rounded-full" style={{ width: '300px', height: '300px', objectFit: 'cover' }} /> */}
        <h1 className="text-4xl font-bold mb-4">Welcome to MyTodo!</h1>
        <p className="text-lg mb-4">Organize your tasks effortlessly.</p>
        <Link to="/Task-Management-Application/home" className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300">Get Started</Link>
        <div className="mt-8">
          <p className="italic">"{randomQuote.text}"</p>
          <p className="text-sm mt-2">- {randomQuote.author}</p>
        </div>
        {/* <img src={image2} alt="Image 2" className="mt-8 rounded-full" style={{ width: '300px', height: '300px', objectFit: 'cover' }} /> */}
      </div>
    </div>
  );
};

export default LandingPage;
