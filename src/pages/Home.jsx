import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { isDarkMode, courses } = useContext(AppContext)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn New Skills Online
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover thousands of courses taught by industry experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse Courses
              </button>
            </Link>
            <Link to="/register">
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {course.description.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      ${course.price}
                    </span>
                    <Link to={`/courses/${course.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of students who are transforming their careers
          </p>
          <Link to="/register">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Free
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
