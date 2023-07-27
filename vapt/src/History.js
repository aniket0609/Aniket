import React from 'react'; // Import the 'react' module
import Table from './Table'; // Import the 'Table' component from './Table'
import { Link } from 'react-router-dom'; // Import the 'Link' component from 'react-router-dom'
import './Home.css'; // Import the 'Home.css' stylesheet

const History = () => { // Create a functional component named 'History'
    return ( // Start of the component's JSX code
        <div>
            {/* Start of the header section */}
            <header className="header">
                <div className="logo">
                    <a href="#">
                        {/* Font Awesome icon */}
                        <i className="fa-duotone fa-diagram-venn"></i> 
                        <b>
                            {/* Heading with inline style */}
                            <h3 style={{ color: 'rgba(15, 10, 231, 1)' }}>
VAPT Report</h3>Auto-generation Tool
                        </b>
                    </a>
                    {/* Start of the search box section */}
                    <div className="search_box">
                        {/* Input element */}
                        <input type="text" placeholder="Search .." />
                        {/* Font Awesome icon */}
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    {/* End of the search box section */}
                </div>
                {/* Start of the header icons section */}
                <div className="header-icons">
                    {/* Font Awesome icon */}
                    <i className="fa-solid fa-bell fa-shake"></i>
                    {/* Start of the account section */}
                    <div className="account">
                        {/* Image */}
                        <img src="https://www.plm.automation.siemens.com/media/global/en/siemens-plm-logo-1200x630_tcm27-12195.jpg" alt="" />
                        {/* Heading */}
                        <h4>VAPT Tool</h4>
                        <i></i> {/* Empty icon (no Font Awesome class specified) */}
                        {/* React Router 'Link' component */}
                        <Link to= "/">
                            {/* Font Awesome icon */}
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </Link>
                        {/* End of the 'Link' component */}
                    </div>
                    {/* End of the account section */}
                </div>
                {/* End of the header icons section */}
            </header>
            {/* End of the header section */}
            
            {/* Start of the main container */}
            <div className="container">
                {/* Start of the navigation section */}
                <nav>
                    {/* Start of the side navbar section */}
                    <div className="side_navbar">
                        {/* Text */}
                        <span>Main Menu</span>
                        {/* React Router 'Link' component */}
                        <Link to="/dash">
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-gauge"></i> Dashboard
                        </Link>
                        {/* End of the 'Link' component */}
                        {/* React Router 'Link' component */}
                        <Link to="/add-vulnerability">
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-add"></i> Add Vulnerability
                        </Link>
                        {/* End of the 'Link' component */}
                        {/* Anchor element */}
                        <a href="#">
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-bug"></i> All Issues</a>
                        {/* React Router 'Link' component with 'active' class */}
                        <Link to="/history" className='active'>
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-clock-rotate-left"></i> History
                        </Link>
                        {/* End of the 'Link' component */}
                        {/* Anchor element */}
                        <a href="#">
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-gears"></i> Methodology
                        </a>
                        {/* Anchor element */}
                        <a href="#">
                            {/* Font Awesome icon and text */}
                            <i className="fa-solid fa-trash"></i> Trash
                        </a>
                        {/* Start of the links section */}
                        <div className="links">
                            {/* Text */}
                            <span>Quick Link</span>
                            {/* Anchor element */}
                            <a href="#">Nodes</a>
                        </div>
                        {/* End of the links section */}
                    </div>
                    {/* End of the side navbar section */}
                </nav>
                {/* End of the navigation section */}
                
                {/* Start of the center body section */}
                <div className="center-body">
                    {/* Heading */}
                    <h2><b>HISTORY</b></h2>
                    {/* Start of the table section */}
                    <div className="table">
                        {/* Render the 'Table' component */}
                        <Table />
                    </div>
                    {/* End of the table section */}
                </div>
                {/* End of the center body section */}
            </div>
            {/* End of the main container */}
        </div>
        // End of the component's JSX code
    );
}

export default History; // Export the 'History' component as the default export
