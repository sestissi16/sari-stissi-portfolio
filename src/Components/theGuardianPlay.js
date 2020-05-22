import React, { Component } from 'react';
import CoverArt from '../Media/mediumCoverArt.jpg'
import LargeCoverArt from '../Media/coverArt.jpg'
// import './theGuardianPlay.css'
import '../style.css'

class theGuardian extends Component {
  render() {

    return (
        <div id="theGuardianPlayContainer">
            <div id="container">
                <div className="coverimage">
                    <span>
                        <a href={LargeCoverArt}>
                            <img src={CoverArt}  alt="Drawing of the island of Serpedon Cover Art" border="1"/>
                        </a>
                    </span>
                </div>
                <div className="links">
                    <div className="smalltitle">The Guardian</div>
                    <ul>
                        <li>
                            <a href="/TheGuardian">The Guardian Home page</a>
                        </li>
                        <li>
                            <a href="/">Go back to portfolio site</a>
                        </li>
                    </ul>
                </div>
                <div id="gameport">
                    <div id="windowport">
                        <noscript>
                            <hr>
                                <p>You'll need to turn on Javascript in your web browser to play this game.</p>
                            </hr>
                        </noscript>
                    </div>
                    <div id="loadingpane">
                        <img src="interpreter/waiting.gif" alt="LOADING"/><br/>
                        <em>&nbsp;&nbsp;&nbsp;Loading...</em>
                    </div>
                    <div id="errorpane" style={{display: 'none'}}><div id="errorcontent">...</div></div>
                </div>
            </div>
            <div className="interpretercredit">
                <a href="http://eblong.com/zarf/glulx/quixe/">Quixe for Inform 7 (v. 2.1.2)</a>
            </div>
        </div>
    );
  }
}

export default theGuardian;
