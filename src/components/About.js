import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javascript from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import node from "@iconify/icons-logos/nodejs";
import mongo from "@iconify/icons-logos/postgresql";
import cv_esp from "../cv/leandro-milia-curriculumVitae.pdf"
import cv_eng from "../cv/leandro-milia-resume.pdf"



class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var curriculumtext = this.props.resumeBasicInfo.section_name.curriculum;
      var curriculum_type = this.props.resumeBasicInfo.section_name.curriculum_type;
      console.log(curriculum_type)
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;

      if(curriculum_type === 'spanish'){
       var cv = cv_esp
    
      }else if (curriculum_type === 'english'){
        var cv = cv_eng

      }
      console.log(cv)
    }

    

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="300px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javascript}
                    style={{ fontSize: "400%", margin: "9% 15% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 15%" }}
                  />
                  <Icon
                    icon={node}
                    style={{ fontSize: "400%", margin: "9% 15% 0 5%" }}
                  />
                  <Icon
                    icon={mongo}
                    style={{ fontSize: "400%", margin: "9% 9% 0 7%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br/>
                    <a id="buttonz-container" download href = {cv} ><button id="buttonz" class="btn">{curriculumtext}<i class="fas fa-download"></i> </button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
