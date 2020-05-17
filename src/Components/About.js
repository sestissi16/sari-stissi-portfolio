import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
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
                  <p>{bio}</p>
               </div>
               <div id="aboutContactResumeRow">
                  <div id="aboutContactDetails">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                              {city} {state}, {zip}
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
