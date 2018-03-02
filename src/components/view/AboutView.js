import React, { Component } from 'react'
// Components
import CanvasAnimation from 'components/view/CanvasAnimation'
// Styles
import '@/assets/sass/styles'


export default class AboutView  extends Component {

  constructor() {
    super()
    this.abouttViewCloseHandler = this.abouttViewCloseHandler.bind(this)
  }

  componentDidMount(){

    var closeBtn = this.refs.closeBtn

    TweenMax.from(closeBtn, 1, {
      alpha: 0,
      ease: RoughEase.ease.config({ template:  Bounce.easeOut, strength: 1.5, points: 20, taper: "none", randomize:  true, clamp: false}),
    });

  }

  componentWillUnmount () {
    // TweenMax.killAll()
  }

  componentWillEnter(callback){

    var objBlock = this.refs.aboutView

    TweenMax.fromTo(objBlock, 0.1, {
      height: '20%'
    }, {
      height: '100%',
      ease: Expo.easeOut,
      onComplete:callback
    })

  }

  componentWillLeave(callback){

    var objBlock = this.refs.aboutView

    TweenMax.fromTo(objBlock, 0.1, {
      height: '90%'
    }, {
      height: '0%',
      ease: Expo.easeOut,
      onComplete:callback
    });

  }

  abouttViewCloseHandler(){
    this.props.aboutOpenHandler()
  }

  render() {
    return (
      <div ref="aboutView" className="about-view">

        <div className="about-view__gif-photos">
          <div className="about-view__gif-photos__photos">
            {/* <img className="fit-photos" src="https://media.giphy.com/media/sh5s6pKEJH3Py/giphy.gif" /> */}
          </div>
        </div>

        <div className="canvas">
          <CanvasAnimation />
        </div>

        <section className="about-view__intro">

          <h2 className="intro-txt">
            <span className="line-title">Welcome to</span>
            <img className="full-photo" src="./images/logo-white.svg" width="100%" />
          </h2>
          <hr />

          <h3 className="intro-txt">
            My name is
            <b>
              <span className="color-main"> HARRY</span> <span className="color-sub">CHUANG</span>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            I’m a
            <b>
              <span className="color-red"> UI/UX Designer</span> &
              <span className="color-purple"> FrontEnd Developer</span>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            Skills<br/>
            <b>
              <span className="color-main">Art Direction,</span><br/>
              <span className="color-sub">Interation Design,</span><br/>
              <span className="color-green">User Experience Design,</span><br/>
              <span className="color-red">Coding</span>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            Awards<br/>
            <img src="./images/awwwards-hm-jul-14-noeinoi.png" width="100%" />
            <b>
              <span className="color-main">AWWWARDS - HONORABLE MENTION JUL 14, 2017 - NOEINOI.COM ,</span>
            </b>
            <img src="./images/award-logo-01.svg" width="100%" />
            <b>
              <span className="color-purple">Website of The Day Jan 17,2013 - OliveYang.com ,</span>
            </b>
            <img src="./images/award-logo-02.svg" width="100%" />
            <b>
              <span className="color-green">The Best User Experience Award 2016</span>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            Contact<br/>
            <b>
              <a className="intro-txt__link" href="mailto:harrychuang23@gmail.com">harrychuang23 @gmail.com</a>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            Social Media<br/>
            <a href="https://www.facebook.com/NOEIN.fb" className="intro-txt__link-icon" target="_blank">
              <img src="./images/social-button-fb-light.svg" />
            </a>
            <a href="https://www.linkedin.com/in/harrychuang/" className="intro-txt__link-icon" target="_blank">
              <img src="./images/social-button-Linkedin-light.svg" />
            </a>
            <br/>
            <b>
              <a href="https://medium.com/@harrychuang23" className="intro-txt__link intro-txt__link--sub-color" target="_blank">Medium</a>
            </b>
            <b className="color-main"> / </b>
            <b>
              <a href="https://vimeo.com/harrychuang" className="intro-txt__link intro-txt__link--sub-color" target="_blank">Vimeo</a>
            </b>
          </h3>
          <hr />

          <h3 className="intro-txt">
            ...<br/><br/>
            Thanks for your preview
          </h3>
          {/* <hr /> */}

        </section>

        <a ref="closeBtn" className="pop-close-btn" onClick={ this.abouttViewCloseHandler.bind(this) }>
          <span className="pop-close-btn__icon-arrow pop-close-btn__icon-arrow__L"></span>
          <span className="pop-close-btn__icon-arrow pop-close-btn__icon-arrow__R"></span>
        </a>

      </div>
    )
  }
}
