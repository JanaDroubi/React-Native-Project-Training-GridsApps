import React from 'react'

const Loader = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`${sizes[size]} animate-spin rounded-full border-4 border-gray-300 border-t-blue-600`}></div>
    </div>
  )
}

export default Loader