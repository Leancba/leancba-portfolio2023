import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo && this.props.resumeProjectsWeb) {
      
      var mobiletittle = this.props.resumeBasicInfo.section_name.mobileprojects;
      var webtittle = this.props.resumeBasicInfo.section_name.webprojects;
      var projects = this.props.resumeProjects.map(function (projects) {
       console.log(projects.images[0])
       console.log(projects.main)
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.main}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>

                
                  <li className="list-inline-item mx-3">
                    <span>
                      
                      <div className="text-center" id="prueba" >
                      <i class="devicon-react-plain" style={{ fontSize: "300%" }} >
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          React Native
                        </p>
                        </i>
                        
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      
                      <div className="text-center" id="prueba" >
                      <i class="devicon-javascript-plain" style={{ fontSize: "300%" }} >
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          Javascript
                        </p>
                        </i>
                        
                      </div>
                    </span>
                  </li>
                </div>
              </div>
            </span>
          </div>
        );
      });
    
      var projectsweb = this.props.resumeProjectsWeb.map(function (projects) {
        
       
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center" id="prueba" >
                      <i class="devicon-react-original" style={{ fontSize: "300%" }} >
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          ReactJS
                        </p>
                        </i>
                        
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center" id="prueba2" >
                        <i className="devicon-javascript-plain" style={{ fontSize: "300%" }}>
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          Javascript
                        </p>
                        </i>
                      </div>
                    </span>
                  </li>
                  <li className="list-inline-item mx-3">
                    <span>
                      <div className="text-center" id="prueba2" >
                        <i className="devicon-css3-plain" style={{ fontSize: "300%" }}>
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          Css
                        </p>
                        </i>
                      </div>
                    </span>
                  </li>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{mobiletittle}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
        
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{webtittle}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projectsweb}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
