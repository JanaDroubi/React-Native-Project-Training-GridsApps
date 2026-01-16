import React from 'react'

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  textarea = false,
  rows = 3,
  className = '',
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-2 border rounded-lg
    bg-white dark:bg-gray-700
    text-gray-900 dark:text-white
    border-gray-300 dark:border-gray-600
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error ? 'border-red-500 dark:border-red-500' : ''}
  `

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      {textarea ? (
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input