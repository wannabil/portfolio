import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App'; // Ensure App component is imported correctly

// Get the root element from public/index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  // Use createRoot for React 18+
  const root = ReactDOM.createRoot(rootElement);

  // Render your App component into the root
  root.render(
    <React.StrictMode>
      <App /> {/* Renders your full App component */}
    </React.StrictMode>
  );
} else {
  // Log an error if the root element is not found, useful for debugging
  console.error("Failed to find the root element to mount the React application.");
}
