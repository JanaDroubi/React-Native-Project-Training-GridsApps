import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const CourseDetails = () => {
  const { id } = useParams()
  const { isDarkMode, courses } = useContext(AppContext)
  
  const course = courses.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Course not found</h1>
          <Link to="/courses">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="text-yellow-500">? {course.rating} ({course.students} students)</span>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {course.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {course.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium w-32">Instructor:</span>
                  <span className="text-gray-900 dark:text-white">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium w-32">Duration:</span>
                  <span className="text-gray-900 dark:text-white">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium w-32">Price:</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${course.price}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
                <Link to="/courses">
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Back to Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
