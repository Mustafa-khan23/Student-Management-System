# Student Management System

A simple student management web application built with Node.js, Express.js, EJS, HTML, CSS, and Bootstrap 5.

## Project Overview

This project is a beginner-friendly server-side rendered app that displays student information from a local JSON file. It does not use a database, authentication, or REST APIs.

## Features

- Home page with a hero section
- Student list page
- Student detail page for each student
- Data loaded from a local JSON file
- Simple Bootstrap-based UI

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML/CSS
- Bootstrap 5

## Project Structure

- `index.js` - Main Express server and routes
- `data.json` - Student data source
- `views/` - EJS templates for home, students, details, and error pages
- `public/` - Static assets such as CSS and images

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node index.js
   ```
4. Open your browser and visit:
   ```text
   http://localhost:3000
   ```

## Routes

- `GET /` - Home page
- `GET /students` - List all students
- `GET /students/:id` - View details of a specific student

## Notes

This project is intentionally simple and is designed for learning Express + EJS rendering with static data.
