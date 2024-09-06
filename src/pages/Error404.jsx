import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
        Go Back Home
    </Link>
</div>
  )
}

export default Error404;