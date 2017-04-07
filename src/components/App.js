import React, { Component } from 'react';

import '../css/animate.css';
import '../css/main.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/swipebox.css';

import $ from 'jquery';

import CharacterList from './CharacterList';
import PhotoList from './PhotoList';
import Movies from './Movies';
import AddCounter from '../containers/AddCounter'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            family: [],
            photos: [],
            movies: [],
            childVisible: false,
            details: {}
        };
    }

    loadData () {

        $.when(
            $.get("/data/characters.json"),
            $.get("/data/photobooth.json"),
            $.get("//www.omdbapi.com/?t=proud%20family&r=json")

        ).then(function(family, photos, movies) {
            this.setState({
                family: family[0],
                photos: photos[0],
                movies: movies[0]
            });
            console.log(family[0]);
            console.log(photos[0]);
            console.log(movies[0])

        }.bind(this));

    }

    componentDidMount () {
        this.loadData();
    }


  render() {
    return (
      <div className="App">
          <div className="video-res">

              <video id="self1" className="html5-video player" width="100%" loop autoPlay muted>
                  <source src="media/main.mp4" width="100%" type="video/mp4"></source>
              </video>

              <div className="video-overlay"></div>
          </div>


          <div className="wordsBg">
              <div className="container">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="">
                      <div className="col s12 spacer-small"></div>

                      <div className="text">
                          <h1>The Proud Family</h1>

                          <p>
                               gle to do so due to the civilized nature of humans and their own animal instincts. However, in the end, they figure out that they have each other for support. One notable aspect of the show's humor is the bears' ability to form a "bear stack". As its name implies, the bears stack on top of each other, which serves as their unique way of transportation.
                          </p>
                      </div>
                      <div className="col s12 spacer-small"></div>
                      <p className="">
                          <a
                              className="midButton waves-effect waves-light btn modal-trigger blue lighten-2"
                              href="#values"
                              target="_blank">
                                Penny's Values
                          </a>
                      </p>
                  </div>



              </div>
          </div>



          <div className="videoMain" id="scoop">

              <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
                  <source src="media/dance.mp4" width="100%" type="video/mp4">
                  </source>
              </video>

          </div>

          <div className="parallax-container" id="values">
              <div className="parallax"><img src="images/parallax1.jpg" alt="Banner" /></div>
              <a className="hangRight btn-floating btn-large waves-effect waves-light red pulse"><i className="material-icons">add</i></a>
              <h2 className="left">My Friends</h2>
          </div>

          <div className="parallax-container">
              <div className="parallax"><img src="images/parallax2.jpg" alt="Banner" /></div>
              <a className="hangLeft btn-floating btn-large waves-effect waves-light red pulse"><i className="material-icons">add</i></a>
              <h2 className="right">My Family</h2>
          </div>

          <div className="parallax-container">
              <div className="parallax"><img src="images/parallax3.jpg" alt="Banner" /></div>
              <a className="hangRight btn-floating btn-large waves-effect waves-light red pulse"><i className="material-icons">add</i></a>
              <h2 className="left">My Happiness</h2>
          </div>

          <div className="charactersBg">

              <div className="row scrollspy" id="characters">
                  <div className="col s12 center-align no-padding">
                      <div className="col s12 spacer-small"></div>
                      <h1>Friends and Family</h1>
                      <div className="col s12 spacer-x-small"></div>
                      <div className="col l12 m12 s12 no-padding">
                          <CharacterList data={this.state.family} />
                      </div>

                  </div>
              </div>
          </div>

          <div className="moviesBg">
              <div className="row wow fadeInLeft col s12 center-align scrollspy" id="show">
                  <div className="col s12 spacer-small"></div>
                  <h1>Season Details</h1>

                  <Movies data={this.state.movies} />


                  {/*<AddCounter />*/}

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

          <div className="summaryBg">
              <div className="container">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                      <div className="col s12 spacer-small"></div>
                      <h1>About Penny</h1>

                      <p>
                          Fourteen-year-old Penny Proud is growing up! She’s trying to gain her independence
                          and faces typical teenage experiences in junior high. With the help of her parents,
                           Trudy and Oscar, and her grandma, Sugar Mama, Penny faces all sorts of comical events.
                      </p>

                      <p>
                        She enjoys hanging out with her friends, even though they have gotten her into trouble,
                        and left her to face danger by herself many times. She listens to and always
                        respects her parents, but often caves in to peer pressure. She is also a
                        feminist at times, and is very logical despite her cuteness and beauty.
                      </p>
                      <p>
                          <a
                              className="waves-effect waves-light btn modal-trigger blue lighten-2"
                              href="https://en.wikipedia.org/wiki/The_Proud_Family"
                              target="_blank">
                              Learn More
                          </a>
                      </p>
                  </div>

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

          <div className="photoBg" id="photos">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                      <div className="col s12 spacer-small"></div>
                      <h1>Memorable Moments</h1>

                      <div className="col l12 m12 s12 no-padding">
                          <PhotoList data={this.state.photos} />
                      </div>

                  </div>

                  <div className="col s12 spacer-small"></div>

                  <div className="floatImageBottom">
                                                <img src="images/floater1.png" alt="Float" />
                                          </div>

          </div>
      </div>
    );
  }
}