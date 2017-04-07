import React, { Component } from 'react';

import Photo from './Photos.js';

class PhotoList extends Component {

    render () {
        var photoList = this.props.data.map(function(photo) {
            //console.log(fanArt);
            return (
                <Photo
                    image={photo.image}
                    description={photo.description}
                    key={photo.image}
                />
            );
        }, this);
        return (
            <div className="row col s12 photoList">
                {photoList}
            </div>
        );
    }

}

export default PhotoList;