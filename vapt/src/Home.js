import React from 'react'; // Importing React library
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom library

import './Home.css' // Importing CSS file for styling
import { FormComponent } from './Form.js' // Importing FormComponent from './Form.js' file

import ChartComponent from './Chart.js' // Importing ChartComponent from './Chart.js' file

const Dashboard = () => { // Defining Dashboard component as a functional component
  const chartData = { // Creating chart data object
    labels: ['NEXT', 'DONE', 'BACKLOG'], // Labels for the chart
    data: [60, 30, 10], // Data values for the chart
  };

  return ( // Returning JSX elements
    <div>
      <header className="header"> {/* Header section */}
        <div className="logo"> {/* Logo section */}
          <a href="#">
            <i className="fa-duotone fa-diagram-venn"></i>
            <b><h3 style={{ color: 'rgba(15, 10, 231, 1)' }}>
              VAPT Report</h3>Auto-generation Tool
            </b>
          </a>
          <div className="search_box"> {/* Search box section */}
            <input type="text" placeholder="Search .." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="header-icons"> {/* Header icons section */}
          <i className="fa-solid fa-bell fa-shake"></i>
          <div className="account"> {/* Account section */}
            <img src="https://www.plm.automation.siemens.com/media/global/en/siemens-plm-logo-1200x630_tcm27-12195.jpg" alt="" />
            <h4>VAPT Tool</h4>
            <i></i>
            <Link to="/"> {/* Link to home */}
              <i class="fa-solid fa-right-from-bracket"></i>
            </Link>
          </div>
        </div>
      </header>
      <div className="container"> {/* Main container */}
        <nav>
          <div className="side_navbar"> {/* Side navigation */}
            <span>Main Menu</span>
            <Link to="/dash"> {/* Link to dashboard */}
              <i className="fa-solid fa-gauge"></i> Dashboard
            </Link>
            <Link to="/add-vulnerability"> {/* Link to add vulnerability */}
              <i className="fa-solid fa-add"></i> Add Vulnerability
            </Link>
            <a href="#"> {/* Link to all issues */}
              <i className="fa-solid fa-bug"></i> All Issues
            </a>
            <Link to="/history"> {/* Link to history */}
              <i className="fa-solid fa-clock-rotate-left"></i> History
            </Link>
            <a href="#"> {/* Link to methodology */}
              <i className="fa-solid fa-gears"></i> Methodology
            </a>
            <a href="#"> {/* Link to trash */}
              <i className="fa-solid fa-trash"></i> Trash
            </a>

            <div className="links"> {/* Quick links */}
              <span>Quick Link</span>
              <a href="#">Nodes</a>
            </div>
          </div>
        </nav>

        <div className="main-body"> {/* Main body section */}
          <h2>Dashboard</h2>
          <div className="promo_card"> {/* Promotional card */}
            <h1 style={{ color: 'rgb(255,255,255)' }}>Welcome to Vulnerability and Penetration tool</h1>
            <span>Make your work easy.</span>
            <button>Learn More</button>
          </div>

          <div className="pie-chart"> {/* Pie chart */}
            <h2 className="chart-heading">METHODOLOGY PROGRESS</h2>
            <div className="programming-stats"> {/* Chart and details */}
              <div className="chart-container">
                {/* <canvas className="my-chart"></canvas> */}
                <ChartComponent chartData={chartData}/> {/* Rendering ChartComponent */}
              </div>

              <div className="details">
                <ul>
                  <li>NEXT: <span className="percentage">60%</span></li> {/* Chart details */}
                  <li>DONE: <span className="percentage">30%</span></li>
                  <li>BACKLOG: <span className="percentage">10%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; // Exporting Dashboard component
