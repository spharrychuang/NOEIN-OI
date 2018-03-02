import React, { Component } from 'react'
// Styles
import '@/assets/sass/styles'
// components
import ProjectInfo from 'components/view/ProjectInfo'

export default class ProjectsKKdayExpert extends Component {

  render() {

    return (
      <section className={`projects-tmp`}>

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'100px', paddingBottom:'0px' }} src='./images/projects/KKdayTravelExpertUI-tmp02.jpg' />
        </div>

        <div className="tmp-block">
          <ProjectInfo
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          />
        </div>

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/KKdayTravelExpertUI-tmp05.jpg' />
        </div>

        <div className="tmp-block" >
          <div className="tmp-block__listBlock row">

            <div className="tmp-block__listBlock__row">
              <div className="col-xs-6 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-01.jpg" />
              </div>
              <div className="col-xs-6 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-02.jpg" />
              </div>
              <div className="hidden-xs col-xs-4 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-03.jpg" />
              </div>
              <div className="hidden-xs hidden-sm col-xs-4 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-04.jpg" />
              </div>
              <div className="hidden-xs hidden-sm col-xs-4 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-05.jpg" />
              </div>
              <div className="hidden-xs hidden-sm col-xs-4 col-sm-4 col-md-2">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock-06.jpg" />
              </div>
            </div>

            <div className="tmp-block__listBlock__row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock02-01.jpg" />
              </div>
              <div className="hidden-xs col-xs-12 col-sm-6 col-md-3">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock02-02.jpg" />
              </div>
              <div className="hidden-xs hidden-sm col-sm-6 col-md-3">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock02-03.jpg" />
              </div>
              <div className="hidden-xs hidden-sm col-sm-6 col-md-3">
                <img className="list-photo" src="./images/projects/KKdayTravelExpertUI-listBlock02-04.jpg" />
              </div>
            </div>

          </div>
        </div>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto tmp-block__heroPhoto--bgFixed" style={{ backgroundImage:'url(./images/projects/KKdayTravelExpertUI-tmp03.jpg)' }}></div>
        </div> */}

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'100px', paddingBottom:'100px' }} src='./images/projects/KKdayTravelExpertUI-tmp03.jpg' />
        </div>

      </section>
    )
  }
}
