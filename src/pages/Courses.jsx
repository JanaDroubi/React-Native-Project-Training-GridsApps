import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Courses = () => {
  const { isDarkMode, courses } = useContext(AppContext)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          All Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                  <span className="text-yellow-500">? {course.rating}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description.substring(0, 120)}...
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                      ${course.price}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {course.duration} ? {course.students} students
                    </p>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
