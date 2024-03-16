import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Part Time at Juris Technologies <span> February 2024 – April 2024</span></h2>
                        <p>
                        • Collaborated with a cross-functional team to design and implement software solutions <br></br>
                        • Developed and maintained features for involved projects using PHP, JavaScript and SQL <br></br>
                        • Investigated and resolved project bugs and defects <br></br>
                        • Developed connectors and controllers for assignment request API <br></br>
                        • Participated in code reviews, debugging, and resolving software defects <br></br>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Juris Technologies <span> November 2023 – February 2024</span></h2>
                        <p>
                        • Collaborated with a cross-functional team to design and implement software solutions <br></br>
                        • Developed and maintained features for involved projects using PHP, JavaScript and SQL <br></br>
                        • Investigated and resolved project bugs and defects <br></br>
                        • Developed connectors and controllers for assignment request API <br></br>
                        • Participated in code reviews, debugging, and resolving software defects <br></br>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>Education </h3>

                        <h2>Monash University Malaysia  <span> March 2021 – November 2024</span></h2> 
                        <p> <i>Bachelor of Software Engineering (Honours)    </i></p> 
                        <p>GPA: 3.79/4.0 CGPA: 3.931/4.0</p>
                        <p>Weighted Average Mark (WAM): 83.175%</p>
                        <p>Relevant Coursework: 
                          Advanced Algorithms and Data Structures; Software Development; Object Oriented Programming; 
                          Databases; Artificial Inteligence; Software Engineering Process and Management; 
                          Software Quality Assurance and Testing; Computer Architecture</p>

                        <h2>Sunway College  <span> March 2020 - November 2020</span> </h2> 
                        <p> <i> Monash University Foundation Year  </i></p> 
                        <p> Obtained Jeffery Cheah's entrance scholarship</p> 
          
                        <p> Average Score: 88.75%</p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
