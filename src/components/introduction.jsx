import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                           <h3> <mark>Hi! I'm Fluoryynx </mark> </h3>
                           <h3> <mark>Here's my resume ⬇️ </mark> </h3>
                          <p> <a href="https://drive.google.com/file/d/1BdYPu40BKkK4uspX5kaFm8Sz7L8uhXQd/view?usp=share_link" target="_blank" className="view_cv"> View CV <i className="icon-download4" /></a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h3> <mark> Here are my projects ⬇️ </mark></h3>
                          <p> <a href="https://github.com/fluoryynx" target="_blank" className="view_cv"> View Projects <i className="icon-briefcase3" /></a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
