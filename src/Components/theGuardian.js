import React, { Component } from 'react';
import CoverArt from '../Media/mediumCoverArt.jpg'
import LargeCoverArt from '../Media/coverArt.jpg'
import './theGuardian.css'

class theGuardian extends Component {
  render() {

    // if(this.props.data){
    //   var name = this.props.data.name;
    //   var profilepic= "images/"+this.props.data.image;
    //   var bio = this.props.data.bio;
    //   var street = this.props.data.address.street;
    //   var city = this.props.data.address.city;
    //   var state = this.props.data.address.state;
    //   var zip = this.props.data.address.zip;
    //   var phone= this.props.data.phone;
    //   var email = this.props.data.email;
    //   var resumeDownload = this.props.data.resumedownload;
    // }

    return (
        <div id="theGuardianContainer">
            <div id="gameHomeContainer">
                <div id="gameHomeSidebar">
                    <div id="coverimage">
                        <span>
                            <a href={LargeCoverArt}>
                                <img src={CoverArt} alt="Drawing of the island of Serpedon Cover Art" border="1"/>
                            </a>
                        </span>
                    </div>
                    <div id="links">
                        <ul>
                            <li>
                                <div id="downloadGameFile">
                                    <a href="The Guardian.gblorb">Story File</a> <span className="filetype">(Blorb,&nbsp;727KB)</span>
                                </div>
                            </li>
                            <li>
                                <div id="playGameLink">
                                    <a href="/PlayTheGuardian">Play In-Browser</a> <span className="filetype">(link)</span>
                                </div>
                            </li>
                            <li>
                                <div id="portfolioLink">
                                    <a href="/">Go back to portfolio site</a> <span className="filetype">(link)</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div id="gameHomeMainContainer">
                    <div id="introduction">
                        <h1><span>The Guardian</span></h1>
                        <h2><span>Sari Stissi</span></h2>
                        <div id="bibliography"><span>Release 1</span></div>
                        <div id="madeWith"><span>Made with inform7</span></div>
                    </div>
                    
                    <div id="gameAbout">
                        <span>
                            <p>
                                This is a text based story based game I created based an ancient Greek myth. 
                                You would play a woman thrown who wakes up without her memory on an island.
                                The goal is to explore the island and uncover the story to find out who you are!
                            </p>
                            <p>
                                You are a woman in ancient Greece on the Island of Sarpedon and you have no idea who you are. What happened? Who are you really?
                            </p>
                        </span>
                    </div>
                
                    <div id="playinfo">
                        <p>
                            The Guardian was created with <a href="http://inform7.com/">Inform</a> and has IFID 96DCD0D5-F8CE-467A-9038-F6E9E741E9ED. To play a work like this one, you need an interpreter program: many are available, among them <a href="http://www.logicalshift.demon.co.uk/mac/zoom.html">Zoom
                    for Mac OS X</a> and for <a href="http://www.logicalshift.demon.co.uk/unix/zoom/">Unix</a>; <a href="http://freespace.virgin.net/davidk.kinder/frotz.html">Windows Frotz</a> or <a href="http://freespace.virgin.net/davidk.kinder/glulxe.html">Windows Glulxe</a> for Windows.  
                    Or you can play without downloading anything by following the 'Play In-Browser'
                    link, using the Quixe interpreter. You'll need to have Javascript enabled
                    on your web browser.
                        </p>
                    </div>
                </div>        
            </div>
        </div>
    );
  }
}

export default theGuardian;
