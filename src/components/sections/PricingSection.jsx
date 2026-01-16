import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Access to 50+ free courses',
        'Community support',
        'Basic certificates',
        'Limited course materials'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Access to all courses',
        'Priority support',
        'Professional certificates',
        'Downloadable resources',
        'Project files',
        'Monthly webinars'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$99',
      period: 'per month',
      description: 'For teams & organizations',
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Team progress tracking',
        'Custom learning paths',
        'Dedicated account manager',
        'API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <Card 
          key={index} 
          className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
        >
          {plan.popular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge color="blue">Most Popular</Badge>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {plan.name}
            </h3>
            <div className="flex items-center justify-center mb-1">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {plan.price}
              </span>
              {plan.period !== 'forever' && (
                <span className="text-gray-600 dark:text-gray-400 ml-1">/{plan.period}</span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {plan.description}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            fullWidth 
            size="large"
            variant={plan.popular ? 'primary' : 'outline'}
          >
            {plan.cta}
          </Button>
        </Card>
      ))}
    </div>
  )
}

export default PricingSection