import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Styles
import '@/assets/sass/styles'
// Actions
import { heroBlockOpenAction, heroBlockCloseAction } from '@/actions/noeinoiActions'


export default class ProjectInfo extends Component {

  constructor() {
    super()
  }

  componentDidMount(){

  }


  render() {

    return (
      <section className="tmp-block__info-block">

        <div className="tmp-block__info-block__content">
          <h3 className="subtitle font-s-36">PROJECT</h3>
          <p className="info-txt color-dark-80a font-s-20">{this.props.intro}</p>
        </div>

        <div className="tmp-block__info-block__content">
          <h3 className="subtitle font-s-36">ROLE</h3>
          <p className="info-txt color-dark-80a font-s-20"><b>{this.props.role}</b></p>
        </div>

        <div className="tmp-block__info-block__content">
          <h3 className="subtitle font-s-36">TYPOGRAPHY</h3>
          <img className="typo-photo" src={`${this.props.typo}`} />
        </div>

        <div className="tmp-block__info-block__content">

          <h3 className="subtitle font-s-36">COLOR</h3>

          <div className="row">

            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="color-block" style={{ backgroundColor: `${this.props.color}` }}>
                <div className="color-block__txt font-s-14 color-white">
                  <b>Main Color</b>{this.props.color}
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="color-block" style={{ backgroundColor: `${this.props.subColor}` }}>
                <div className="color-block__txt font-s-14 color-white">
                  <b>Sub Color</b>{this.props.subColor}
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="color-block" style={{ backgroundColor: `${this.props.darkColor}` }}>
                <div className="color-block__txt font-s-14 color-white">
                  <b>Dark Color</b>{this.props.darkColor}
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="color-block" style={{ backgroundColor: `#FFFFFF` }}>
                <div className="color-block__txt font-s-14 color-dark">
                  <b>White Color</b>#FFFFFF
                </div>
              </div>
            </div>

          </div>

        </div>

        { this.props.linkData.linkP !== false ?

          <div className="tmp-block__info-block__content">
            <h3 className="subtitle font-s-36">LINK</h3>
            <a className={`nav-link nav-link__appStore
              ${this.props.linkData.appStore === '' ? 'nav-link--none' :
                this.props.linkData.appStore === 'coming' ? 'nav-link--coming' :
                '' } `} href={ `${this.props.linkData.appStore}` } target="_blank">
              <img src="./images/icon-apple.svg" /> {this.props.linkData.appStore === 'coming' ? 'Coming..' : 'App Store'}
            </a>
            <a className={`nav-link nav-link__googlePlay
              ${this.props.linkData.googlePlay === '' ? 'nav-link--none' :
                this.props.linkData.googlePlay === 'coming' ? 'nav-link--coming' :
                '' } `} href={ `${this.props.linkData.googlePlay}` } target="_blank">
              <img src="./images/icon-googleplay.svg" /> {this.props.linkData.googlePlay === 'coming' ? 'Coming..' : 'Google Play'}
            </a>
            <a className={`nav-link nav-link__website ${this.props.linkData.website != '' ? '' : 'nav-link--none'} `} href={ `${this.props.linkData.website}` } target="_blank">
              <img src="./images/icon-link.svg" />Website
            </a>
          </div>

          : null

        }


      </section>
    )
  }
}
