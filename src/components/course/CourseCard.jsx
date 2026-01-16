import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const CourseCard = ({ course }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge>{course.category}</Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
            {course.title}
          </h3>
          <span className="text-yellow-500 flex items-center">
            <span className="mr-1">⭐</span>
            {course.rating}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="mr-4">👤 {course.instructor}</span>
            <span>⏱️ {course.duration}</span>
          </div>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${course.price}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            👥 {course.students.toLocaleString()} students
          </span>
          <Link to={`/courses/${course.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default CourseCard