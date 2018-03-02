import React, { Component } from 'react'
// Styles
import '@/assets/sass/styles'
// components
import ProjectInfo from 'components/view/ProjectInfo'

export default class ProjectsTMLessonLibrary extends Component {

  render() {

    return (
      <section className={`projects-tmp`}>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/TMLessonLibraryUI-tmp02.jpg)' }}></div>
        </div> */}

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'100px', paddingBottom:'0px' }} src='./images/projects/TMLessonLibraryUI-tmp02.jpg' />
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

        <div className="tmp-block">
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/TMLessonLibraryUI-tmp04.jpg' />
        </div>

        <div className="tmp-block">
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/TMLessonLibraryUI-tmp01.jpg' />
        </div>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/TMLessonLibraryUI-tmp01.jpg)' }}></div>
        </div> */}

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/TMLessonLibraryUI-tmp05.jpg)' }}></div>
        </div> */}

      </section>
    )
  }
}
