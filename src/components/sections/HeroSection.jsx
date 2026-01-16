import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const HeroSection = () => {
  const { isDarkMode } = useContext(AppContext)

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Career with Online Learning
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Access thousands of courses taught by industry experts. 
              Learn at your own pace and get certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Courses
                </button>
              </Link>
              <Link to="/register">
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Free Trial
                </button>
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm opacity-80">Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-80">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm opacity-80">Instructors</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Online Learning"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection