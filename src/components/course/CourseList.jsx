import React from 'react'
import CourseCard from './CourseCard'
import EmptyState from '../ui/EmptyState'
import Loader from '../ui/Loader'

const CourseList = ({ courses, loading = false, emptyMessage = 'No courses found' }) => {
  if (loading) {
    return (
      <div className="py-12">
        <Loader size="large" />
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <EmptyState 
        title="No Courses Found"
        message={emptyMessage}
        icon="📚"
        actionLabel="Browse All Courses"
        onAction={() => window.location.href = '/courses'}
      />
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseList