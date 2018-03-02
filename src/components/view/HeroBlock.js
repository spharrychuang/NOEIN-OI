import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Styles
import '@/assets/sass/styles'
// Actions
import { heroBlockOpenAction, heroBlockCloseAction } from '@/actions/noeinoiActions'
// Components
import ProjectsKKdayExpert        from 'components/view/projects/ProjectsKKdayExpert'
import ProjectsTMLearningPortal   from 'components/view/projects/ProjectsTMLearningPortal'
import ProjectsTMLessonLibrary    from 'components/view/projects/ProjectsTMLessonLibrary'
import ProjectsIEDLearningPortal  from 'components/view/projects/ProjectsIEDLearningPortal'
import ProjectsITylerSmartWatch   from 'components/view/projects/ProjectsITylerSmartWatch'
import OtherProjects              from 'components/view/projects/OtherProjects'

export default class HeroBlock extends Component {

  constructor() {
    super()
    this.projectScrollerHandler = this.projectScrollerHandler.bind(this)
  }

  componentDidMount(){
    var objBlock = this.refs.projectBlock;
    objBlock.addEventListener('scroll', this.projectScrollerHandler.bind(this));
  }

  componentWillEnter(callback){

    var objBlock = this.refs.projectBlock;
    var objMoveTop = ''
    var objMoveSkewY = ''

    if(this.props.controlType === 'prev'){
      objMoveTop = '-160vh'
      objMoveSkewY = '-30deg'
    }else if(this.props.controlType === 'next'){
      objMoveTop = '160vh'
      objMoveSkewY = '30deg'
    }

    TweenMax.fromTo(objBlock, 0.8, {
      marginTop:`${objMoveTop}`,
      skewY:`${objMoveSkewY}`
    }, {
      marginTop:0,
      skewX:"0deg",
      skewY:"0deg",
      ease: Quart.easeInOut,
      onComplete:callback,
      delay: 0.1
    });

  }

  componentWillLeave(callback){

    var objBlock = this.refs.projectBlock;
    var objMoveTop = ''
    var objMoveSkewY = ''

    if(this.props.controlType === 'prev'){
      objMoveTop = '160vh'
      objMoveSkewY = '-30deg'
    }else if(this.props.controlType === 'next'){
      objMoveTop = '-160vh'
      objMoveSkewY = '30deg'
    }

    TweenMax.fromTo(objBlock, 0.6, {
      marginTop:0,
      skewX:"0deg",
      skewY:"0deg"
    }, {
      marginTop:`${objMoveTop}`,
      skewY:`${objMoveSkewY}`,
      ease: Quart.easeIn,
      onComplete:callback,
      delay: 0.1
    });

  }

  heroBlockOpenHandler(tarType){

    var projectBlock = this.refs.projectBlock;
    this.props.heroBlockOpenAction()

    // if( this.props.heroBlockOpenBool === false ){
      // this.props.heroBlockOpenAction()
    // }

  }

  projectScrollerHandler(e){
    var objBlock = this.refs.projectBlock;
    this.props.projectOnScrollHandler(objBlock, e.deltaY)
  }

  render() {

    if(this.props.heroBlockOpenBool === false){
      // TweenMax.to( this.refs.projectBlock, 1, { x:0, ease:Quart.easeOut } )
    }

    return (
      <section ref="projectBlock" className={`noeinoi-main ${this.props.heroBlockOpenBool === true ? 'noeinoi-main--open' : ''} `} onWheel={this.projectScrollerHandler.bind(this)} onClick={ this.heroBlockOpenHandler.bind(this, 'heroBlock') }>

        {/* noeinoi-main--open */}

        <div className="noeinoi-main__hero-block" style={{ backgroundImage:`url(${this.props.heroPhoto})` }} >

            <div className="noeinoi-main__hero-block__intro-block">
              <h2 className="company-title font-s-36" style={{ color:`${this.props.color}` }}>{this.props.company}</h2>
              <h1 className="projects-title font-s-120" style={{ color:`${this.props.txtColor}` }}>{this.props.title}</h1>
              <h5 className="role-txt font-s-20" style={{ color:`${this.props.txtColor}` }}>{this.props.type}</h5>
              <h6 className="date-txt font-s-24" style={{ color:`${this.props.color}` }}>{this.props.date}</h6>
            </div>

        </div>

        {
          this.props.projectID === 0 ? <ProjectsKKdayExpert
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          this.props.projectID === 1 ? <ProjectsITylerSmartWatch
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          this.props.projectID === 2 ? <ProjectsIEDLearningPortal
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          this.props.projectID === 3 ? <ProjectsTMLessonLibrary
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          this.props.projectID === 4 ? <ProjectsTMLearningPortal
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          this.props.projectID === 5 ? <OtherProjects
            color={this.props.color}
            subColor={this.props.subColor}
            darkColor={this.props.darkColor}
            intro={this.props.intro}
            typo={this.props.typo}
            role={this.props.role}
            linkData={this.props.linkData}
          /> :
          null
        }

      </section>
    )
  }
}
