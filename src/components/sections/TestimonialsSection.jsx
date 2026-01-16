import React from 'react'
import Card from '../ui/Card'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Web Developer',
      content: 'The courses helped me transition from marketing to web development. I landed my first developer job within 3 months!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&auto=format&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'UX Designer',
      content: 'The design courses are top-notch. I improved my portfolio and got promoted at work thanks to what I learned.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop'
    },
    {
      name: 'Emma Wilson',
      role: 'Data Analyst',
      content: 'The data science track gave me the skills I needed to advance my career. The projects were especially helpful.',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center mb-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          </div>
          <div className="mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span 
                key={i} 
                className={`text-xl ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic">
            "{testimonial.content}"
          </p>
        </Card>
      ))}
    </div>
  )
}

export default TestimonialsSection