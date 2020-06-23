import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
         <div id="aboutContainer">
            <div id="aboutPictureContainer">
               <img className="profile-pic"  src={profilepic} alt="Sari Stissi Profile Pic" />
            </div>
            <div id="aboutMeDetails">
               <div id="aboutMeInfo">
                  <h2>About Me</h2>
                  <p className="bio">
                     {bio1}<br/><br/>
                     {bio2}<br/><br/>
                     {bio3}
                  </p>
               </div>
               <div id="aboutContactResumeRow">
                  <div id="aboutContactDetails">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>
                              {city}, {state}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div id="aboutDownload">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
