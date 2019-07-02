import React, { Component } from "react";
import "./PageBody.css";
import PlatformButtons from '../PlatformButtons/PlatformButtons';
import testvid from './testvid.mp4'

class PageBody extends Component {
  render() {
    return (
      <div className="pagebody">
          <video autoPlay muted loop>
              <source src={testvid} type="video/mp4"/>
              Your browser does not support HTML5 video
          </video>
          <h2 className="pagebody__heading">The smart way to make the most out of your card collection</h2>
          <p className="pagebody__subheading">*For desktop platforms only</p>
          <PlatformButtons/>
          {/* app preview */}
      </div>
    );
  }
}

export default PageBody;
