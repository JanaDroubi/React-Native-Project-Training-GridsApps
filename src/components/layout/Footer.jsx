import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} EdTech Platform. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/about" className="mx-2 hover:text-blue-300">About</Link>
            <Link to="/contact" className="mx-2 hover:text-blue-300">Contact</Link>
            <Link to="/privacy" className="mx-2 hover:text-blue-300">Privacy</Link>
            <Link to="/terms" className="mx-2 hover:text-blue-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
