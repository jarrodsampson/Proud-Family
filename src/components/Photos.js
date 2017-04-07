import React, { Component } from 'react';

class Photo extends Component {

    render () {
        return (
            <div className="col l6 m6 s12">
                <a className="swipebox" href={"images/photos/" + this.props.image} data-title={this.props.description} data-lightbox="photos">
                    <div className="photoHolder">
                    <img
                        className=""
                        data-src={"images/photos/" + this.props.image}
                        src={"images/photos/" + this.props.image}
                        alt={this.props.description} />

                    <div className="titleIt">
                        <p>{this.props.description}</p>
                    </div>
                    </div>
                </a>
            </div>
        );
    }

}

export default Photo;