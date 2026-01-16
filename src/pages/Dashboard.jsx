import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
  const { isDarkMode, user, courses } = useContext(AppContext)

  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Please log in to view dashboard</h1>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Welcome, {user.name}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Total Courses</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{courses.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Enrolled Students</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {courses.reduce((sum, course) => sum + course.students, 0)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Average Rating</h3>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {courses.length > 0 
                ? (courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1)
                : '0.0'
              }
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Course Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 text-left text-gray-700 dark:text-gray-300 font-medium">Course</th>
                  <th className="py-3 text-left text-gray-700 dark:text-gray-300 font-medium">Price</th>
                  <th className="py-3 text-left text-gray-700 dark:text-gray-300 font-medium">Students</th>
                  <th className="py-3 text-left text-gray-700 dark:text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img src={course.image} alt={course.title} className="w-12 h-12 rounded-lg object-cover mr-4" />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{course.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{course.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-gray-800 dark:text-white">${course.price}</td>
                    <td className="py-4 text-gray-800 dark:text-white">{course.students}</td>
                    <td className="py-4">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm mr-2">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
