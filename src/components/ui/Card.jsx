import React from 'react'

const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg'
  const hoverClass = hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
  
  return (
    <div 
      className={`${baseClasses} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card