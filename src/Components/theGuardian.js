import React, { Component } from 'react';
import CoverArt from '../Media/mediumCoverArt.jpg'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'

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
        <div className="gameHomeContainer">
            <Router>
                <Route exact path="/" component={Main} />
            </Router>
            <div className="coverimage"><span><a href="Cover.jpg"><img src={CoverArt} alt="Drawing of the island of Serpedon" border="1"/></a></span></div>
            <div className="introduction">
                <h1><span>The Guardian</span></h1>
                <h2><span>Sari Stissi</span></h2>
                <div className="bibliography"><span>Release 1</span></div>
            </div>
            <div className="links">
                <ul>
                    <li><div className="download"><a href="The Guardian.gblorb">Story File</a> <span class="filetype">(Blorb,&nbsp;727KB)</span></div></li>
                    <div className="auxiliary"><li><a href="../play.html">Play In-Browser</a> <span class="filetype">(link)</span></li></div>
                </ul>
            </div>
        
            <div className="about">
                <span>
                    <p>
                        You are a woman in ancient Greece on the Island of Sarpedon and you have no idea who you are. What happened? Who are you really?
                    </p>
                    <p>
                        You are encouraged to check the [bold type]help[roman type] list to know the commands you will need for this game and how to use them. 
                        Also [bold type]examine[roman type] is a [italic type]very[roman type] useful command in this game. 
                        [line break]And you are encouraged to look at the top of your screen where you can see a status line. 
                        It's a different color than the rest of the page and you can see where your exits are, the name of the room you're in and a reminder for how to access the help list. 
                        [line break]The Exits are abbreviated so: [line break]N is North [line break]S is South [line break]E is East [line break]W is West [line break]NW is Northwest [line break]NE is Northeast [line break]SW is Southwest [line break]SE is Southest [line break]D is Down [line break]U is Up [line break]Consult the help list for more info!
                    </p>
                </span>
            </div>
        
            <div className="playinfo">
                <p>
                    The Guardian was created with <a href="http://inform7.com/">Inform</a> and has IFID 96DCD0D5-F8CE-467A-9038-F6E9E741E9ED. To play a work like this one, you need an interpreter program: many are available, among them <a href="http://www.logicalshift.demon.co.uk/mac/zoom.html">Zoom
            for Mac OS X</a> and for <a href="http://www.logicalshift.demon.co.uk/unix/zoom/">Unix</a>; <a href="http://freespace.virgin.net/davidk.kinder/frotz.html">Windows Frotz</a> or <a href="http://freespace.virgin.net/davidk.kinder/glulxe.html">Windows Glulxe</a> for Windows.  
            Or you can play without downloading anything by following the 'Play In-Browser'
            link, using the Quixe interpreter. You'll need to have Javascript enabled
            on your web browser.
                </p>
            </div> 
        
        </div>
    );
  }
}

export default theGuardian;
