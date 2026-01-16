import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const { isDarkMode, loginUser } = useContext(AppContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo login
    loginUser({
      id: 1,
      name: 'Demo User',
      email: formData.email || 'demo@example.com'
    })
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="????????"
              />
            </div>
            <button 
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Sign In
            </button>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
