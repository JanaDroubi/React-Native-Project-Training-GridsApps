import React from 'react'
import Card from '../ui/Card'

const FeaturesSection = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in their fields.'
    },
    {
      icon: '📱',
      title: 'Learn Anywhere',
      description: 'Access courses on any device, at any time that fits your schedule.'
    },
    {
      icon: '📚',
      title: 'Diverse Content',
      description: 'Choose from hundreds of courses across multiple categories and skill levels.'
    },
    {
      icon: '🎯',
      title: 'Practical Skills',
      description: 'Focus on real-world applications and hands-on projects.'
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Earn certificates to showcase your skills to employers.'
    },
    {
      icon: '💬',
      title: 'Community Support',
      description: 'Join a community of learners and get help when you need it.'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 hover:shadow-xl transition-shadow" hover>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default FeaturesSection