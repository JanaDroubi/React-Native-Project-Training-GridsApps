import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Blog = () => {
  const { isDarkMode } = useContext(AppContext)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Blog
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our blog is coming soon! Check back later for articles, tutorials, and updates.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800 dark:text-white">The Future of Online Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800 dark:text-white">React Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
