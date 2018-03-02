import React, { Component } from 'react'
// Styles
import '@/assets/sass/styles'
// components
import ProjectInfo from 'components/view/ProjectInfo'

export default class OtherProjects extends Component {

  render() {

    return (
      <section className={`projects-tmp`}>

        {/* <div className="tmp-block" >
          <div className="tmp-block__heroPhoto" style={{ backgroundImage:'url(./images/projects/iEduerLearningPortal-tmp03.jpg)' }}></div>
        </div> */}

        <div className="tmp-block" >
          <img className="tmp-block__medPhoto" style={{ paddingTop:'100px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp02.jpg' />
        </div>

        <div className="tmp-block" >
          <h4 className="tmp-block__subtitle">Graphic Design</h4>
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp03.jpg' />
        </div>

        <div className="tmp-block" >
          <h4 className="tmp-block__subtitle">Wallpaper Design</h4>
          <img className="tmp-block__medPhoto" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp15.jpg' />
        </div>

        <div className="tmp-block" >
          <h4 className="tmp-block__subtitle">Logo Design</h4>
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp06.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp07.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'0px' }} src='./images/projects/OtherProjects-tmp13.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp14.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp08.jpg' />
        </div>

        <div className="tmp-block" >
          <h4 className="tmp-block__subtitle">Product Design</h4>
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp04.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp05.jpg' />
        </div>

        <div className="tmp-block" >
          <h4 className="tmp-block__subtitle">UI Design</h4>
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp09.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp10.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'50px' }} src='./images/projects/OtherProjects-tmp11.jpg' />
          <img className="tmp-block__medPhoto tmp-block__medPhoto__last" style={{ paddingTop:'0px', paddingBottom:'100px' }} src='./images/projects/OtherProjects-tmp12.jpg' />
        </div>

      </section>
    )
  }
}
