import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faKey, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import isMobile from "react-device-detect";
class Developer extends React.Component {
    render() {
        return (
            <div className={isMobile ? "developer mobile" : "developer"}>
                <img className="headshot" alt={this.props.name + " headshot"} src={"headshots/" + this.props.id + ".jpg"} />
                <h2 className="name">{this.props.name}</h2>
                <h3 className="title">{this.props.title}</h3>
                <hr />
                <p className="bio">{this.props.bio}</p>
                
                <a href={"keys/" + this.props.id + ".asc"} download><FontAwesomeIcon className="key" icon={faKey} /></a>
                <a href={"mailto:" + this.props.id + "@gatech.edu"}><FontAwesomeIcon className="email" icon={faEnvelope} /></a>
            </div>
        );
    }
}

export default Developer;