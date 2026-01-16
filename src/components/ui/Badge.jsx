import React from 'react'

const Badge = ({ 
  children, 
  color = 'blue',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  }
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  }
  
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${colors[color]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge