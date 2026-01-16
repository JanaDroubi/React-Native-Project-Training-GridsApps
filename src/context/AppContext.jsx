import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // ??????? initialState function ????? ?? useEffect
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses')
    return savedCourses ? JSON.parse(savedCourses) : [
      {
        id: 1,
        title: "React Masterclass",
        description: "Learn React from scratch with this comprehensive beginner's course",
        instructor: "John Doe",
        price: 99.99,
        rating: 4.7,
        students: 1250,
        category: "Programming",
        duration: "30 hours",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        description: "Master modern JavaScript features and best practices",
        instructor: "Jane Smith",
        price: 149.99,
        rating: 4.9,
        students: 890,
        category: "Programming",
        duration: "40 hours",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "UI/UX Design Fundamentals",
        description: "Learn the principles of user interface and user experience design",
        instructor: "Mike Johnson",
        price: 79.99,
        rating: 4.5,
        students: 2100,
        category: "Design",
        duration: "25 hours",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop"
      }
    ]
  })

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // ??? ???????? ??? ???????
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses))
  }, [courses])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const addCourse = (course) => {
    setCourses([...courses, course])
  }

  const updateCourse = (updatedCourse) => {
    setCourses(courses.map(course => 
      course.id === updatedCourse.id ? updatedCourse : course
    ))
  }

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  const loginUser = (userData) => {
    setUser(userData)
  }

  const logoutUser = () => {
    setUser(null)
  }

  const value = {
    isDarkMode,
    setIsDarkMode,
    courses,
    setCourses,
    addCourse,
    updateCourse,
    deleteCourse,
    user,
    loginUser,
    logoutUser
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
