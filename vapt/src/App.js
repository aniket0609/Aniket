import React from 'react'; // Importing the React library
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Dashboard from './Home.js'; // Importing the Dashboard component from './Home.js'
import FormComponent from './Form.js'; // Importing the FormComponent component from './Form.js'
import History from './History.js'; // Importing the History component from './History.js'
import Login from './Login.js'; // Importing the Login component from './Login.js'

const App = () => {
  return (
    <Router> 
      <Routes> // Defining the routes for different URL paths
        <Route path="/" element={<Login />} /> // Rendering the Login component when the root URL is accessed
        <Route path="/dash" element={<Dashboard/>} /> // Rendering the Dashboard component when the '/dash' path is accessed
        <Route path="/add-vulnerability" element={<FormComponent />} /> // Rendering the FormComponent component when the '/add-vulnerability' path is accessed
        <Route path="/history" element={<History />} /> // Rendering the History component when the '/history' path is accessed
      </Routes>
    </Router>
  );
};

export default App;
