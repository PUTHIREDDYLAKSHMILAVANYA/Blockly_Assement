import React from "react";

const Projects = () => (
  <section id="projects" className="projects-section py-5">
    <div className="container">
      <h2 className="text-center mb-5 project-heading">Projects</h2>
      <div className="row justify-content-center">
        {/* Project 1: Covid Dashboard */}
        <div className="col-md-8 mb-4">
          <div className="card shadow-sm project-card">
            <div className="card-body">
              <h5 className="card-title">Covid Dashboard</h5>
              <p className="card-text">
                <strong>Technologies used:</strong> HTML, CSS, JavaScript, React
                JS, Recharts, Figma
              </p>
              <p>
                Created a user-friendly platform to monitor Covid-19 cases in
                India state-wise.
              </p>
              <ul>
                <li>
                  Implemented smooth navigation with React Router components
                  (Route, Switch, Link).
                </li>
                <li>
                  Visualized data with interactive bar and line charts powered
                  by Recharts.
                </li>
                <li>
                  Brought design to life with Figma mockups and
                  precision-crafted React components.
                </li>
              </ul>
              <a
                href="https://covid19pandemic.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: Jobby App */}
        <div className="col-md-8 mb-4">
          <div className="card shadow-sm project-card">
            <div className="card-body">
              <h5 className="card-title">Jobby App</h5>
              <p className="card-text">
                <strong>Technologies used:</strong> React JS, JavaScript, CSS,
                Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
                Authorization, Authentication
              </p>
              <p>
                Implemented Jobby App where users can log in and see a list of
                jobs with search by job title and filters based on salary range
                and employment type.
              </p>
              <ul>
                <li>
                  Implemented Login, Home, Jobs, and Job details pages using
                  React components, props, state, lists, event handlers, and
                  form inputs.
                </li>
                <li>
                  Authenticated users with username/password via login POST API
                  call.
                </li>
                <li>
                  Persisted login state with JWT token stored in client storage
                  and sent in headers for authorization.
                </li>
                <li>
                  Implemented routes with React Router components (Route,
                  Switch, Link).
                </li>
                <li>
                  Filtered and searched jobs by sending query parameters to API
                  calls.
                </li>
                <li>
                  Protected routes to redirect unauthenticated users to login
                  page.
                </li>
              </ul>
              <a
                href="https://jobbycarrerpath.ccbp.tech/login"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Tourism Website */}
        <div className="col-md-8">
          <div className="card shadow-sm project-card">
            <div className="card-body">
              <h5 className="card-title">Tourism Website</h5>
              <p className="card-text">
                <strong>Technologies used:</strong> HTML, CSS, Bootstrap
              </p>
              <p>
                Devised an immersive web experience for users to discover top
                travel destinations through images, videos, and descriptions.
              </p>
              <ul>
                <li>
                  Developed a mobile-optimized interface using HTML elements and
                  CSS3 styling including background, flex, and box model
                  properties.
                </li>
                <li>
                  Implemented destination galleries and virtual tour videos
                  utilizing Bootstrap carousel and embed components.
                </li>
              </ul>
              <a
                href="https://touristjourney.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
