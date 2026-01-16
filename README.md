EduSphere – EdTech / SaaS Landing + Dashboard Lite 🚀

A modern educational platform built with React JS, Vite, and Tailwind CSS, demonstrating a full-stack SaaS-like UI/UX, multi-page navigation, and a lightweight dashboard for course management.

Table of Contents

Project Overview

Features

Pages & Components

Technologies

Getting Started

Screenshots

Deployment

Evaluation Criteria

Contributors

Project Overview

EduSphere is a complete EdTech / SaaS web application with a professional landing page and dashboard lite.

The project demonstrates:

Multi-page navigation with React Router

Responsive layout with Tailwind CSS

Reusable, modular components

Form handling with validation

API data fetching (mocked via JSONPlaceholder or local JSON)

Simple state management with React Context / useReducer

Optional Dark Mode

Mobile, tablet, and desktop responsiveness

💡 Optional for students: This project can be adapted for a mini e-commerce site, CRM, or company website.

Features

Multi-page React application: Home, Courses, Course Details, About, Contact, Blog, Dashboard Lite

Reusable UI components: Navbar, Footer, Cards, Buttons, Modals, Loader, etc.

Form validation: Controlled inputs with error handling

Dynamic Routing: Course Details using useParams

Data fetching: API integration with loading, error, and empty states

Responsive design: Fully optimized for all screen sizes

Dark Mode toggle: Optional UI improvement

Pages & Components
Pages

Home – Hero section, Features, Testimonials, Pricing, CTA

Courses / Services – Course list with Search, Filter, Sorting

Course Details – Single course page (dynamic)

Blog / Articles – Optional article list

About – Team, Mission, and Values

Contact – Form with validation + success message

Auth – Login / Register (UI + basic validation)

Dashboard Lite – CRUD UI for courses/articles with pagination or tabs

Core Components

Navbar, Footer

HeroSection, FeatureCard, TestimonialCard, PricingCard

SearchBar, FilterDropdown

CourseCard, CourseList

Modal / Drawer for Add/Edit

Button, Input, Badge (UI components)

Loader, EmptyState, ErrorState

Technologies

React JS – Components, hooks, state management

React Router – Routes, dynamic pages, Link navigation

Tailwind CSS – Grid, Flex, Responsive layout, Dark Mode

Form Handling – Controlled inputs + validation

Data Fetching – API integration with loading/error handling

Vite – Fast development and build environment

Getting Started
Prerequisites

Node.js ≥ 18

npm ≥ 9

Installation

Clone the repository:

git clone https://github.com/JanaDroubi/React-Native-Project-Training-GridsApps.git
cd React-Native-Project-Training-GridsApps


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at:

http://localhost:5173/

Screenshots

Add screenshots here to show your project’s UI, e.g.:

Home Page

Courses Page

Course Details

Dashboard Lite

Dark Mode Example

You can add images like this:

![Home Page](./screenshots/home.png)
![Dashboard](./screenshots/dashboard.png)

Deployment

You can deploy the project to Vercel or Netlify:

Build the project:

npm run build


Upload the /dist folder to your hosting platform

Share the live deployment link in the README (optional)

Evaluation Criteria
Criteria	Weight
UI/UX & Design	25%
React Structure & Components	20%
Routing & Pages	15%
State & Forms	20%
Data Fetching	10%
Code Quality & README	10%
Contributors

Jana Droubi – Developer & Project Lead

Additional contributors: Add names if others contributed

Notes

Fully responsive design across all devices

Dark Mode toggle is implemented for better UX

Forms include validation and proper user feedback

Dashboard Lite allows Add/Edit/Delete UI (state-based)

Loading, empty, and error states are implemented for better UX

✅ All pages are functional, responsive, and error-free in the console.
