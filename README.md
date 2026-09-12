# Dev Stack Builder

A modern, interactive web application that helps developers explore, compare, and organize their ideal technology stack for software projects.

## Project Description
Dev Stack Builder allows users to browse various frontend, backend, database, and DevOps technologies, view key metrics (like ratings, difficulty levels, and badges), and add selected items into a customized stack list.

## Technologies Used
- React.js
- Tailwind CSS
- Vite
- React-Toastify
- JavaScript (ES6+) / JSON

## Features
1. **Interactive Tech Stack Selection:** Browse 10+ developer tools and add them into a side-by-side stack panel with automatic duplicate prevention.
2. **Dynamic UI & Notifications:** Smooth loading states when fetching JSON data and real-time toast alerts for actions using `react-toastify`.
3. **Responsive Theme:** Fully responsive sticky layout with a centralized dynamic brand gradient theme for modern look and feel.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like structures directly inside JavaScript code. It is used in React to make UI component code cleaner, easier to read, and more intuitive to maintain.

### 2. What is the difference between props and state?
- **Props** (Properties) are read-only data passed from a parent component to a child component to customize it.
- **State** is dynamic data managed internally within a component that can change over time and causes the component to re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to create and manage local state values. In this project, I used `useState` to store the fetched technology list (`technologies`), manage the user's selected items (`selectedStack`), handle the loading spinner state (`loading`), and toggle the mobile menu (`isMobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets us perform side effects in functional components, such as data fetching or DOM updates. I used it to trigger the JSON data fetching right after the component mounted onto the screen.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or removed. It allows React to efficiently update only the specific modified elements in the real DOM instead of re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying specific UI components or elements based on certain logical conditions. 
**Example from project:** I used conditional rendering to display the empty stack placeholder message when `selectedStack.length === 0`, and show the list of selected items when the stack is not empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed down from parent to child via **props**.
- **Child to Parent:** The parent passes a **callback function** to the child as a prop. When the child invokes this function with arguments, it sends data back up to the parent.