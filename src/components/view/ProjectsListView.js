import React, { Component } from 'react'
// Components
import CanvasAnimation from 'components/view/CanvasAnimation'
// Styles
import '@/assets/sass/styles'


export default class ProjectsListView extends Component {

  constructor() {
    super()
    this.projectsListViewCloseHandler   = this.projectsListViewCloseHandler.bind(this)
    this.projectsListMouseOverHandler   = this.projectsListMouseOverHandler.bind(this)
    this.projectsListMouseOutHandler    = this.projectsListMouseOutHandler.bind(this)
    this.projectsListClickHandler       = this.projectsListClickHandler.bind(this)

    this.projectID = null

  }

  componentDidMount(){

    var closeBtn = this.refs.closeBtn

    TweenMax.from(closeBtn, 1, {
      alpha: 0,
      ease: RoughEase.ease.config({ template:  Bounce.easeOut, strength: 1.5, points: 20, taper: "none", randomize:  true, clamp: false}),
    });

  }

  componentWillUnmount () {

  }

  componentWillEnter(callback){

    var objBlock = this.refs.projectsListView

    TweenMax.fromTo(objBlock, 0.1, {
      width: '30%'
    }, {
      width: '100%',
      ease: Expo.easeOut,
      onComplete:callback
    })

  }

  componentWillLeave(callback){

    var objBlock = this.refs.projectsListView
    var gotoProject = null

    console.info(this.projectID)

    if(this.projectID != null){
      console.info('aaa')
        gotoProject = this.props.gotoProjectHandler( this.projectID )
    }

    // console.info(this.projectID)

    TweenMax.fromTo(objBlock, 0.1, {
      width: '70%'
    }, {
      width: '0%',
      ease: Expo.easeOut,
      onComplete:function fin(){
        callback()
        gotoProject
      }
    });

  }

  projectsListViewCloseHandler(){
    this.props.projectListOpenHandler()
  }

  projectsListMouseOverHandler(tarObj, tarColor){
    this.refs[`${tarObj}`].style.opacity = 1
    this.refs[`${tarObj}`].style.transform = 'scale(1.2, 1.2)'
    this.refs.closeBtn.style.backgroundColor = tarColor
  }

  projectsListMouseOutHandler(tarObj){
    this.refs[`${tarObj}`].style.opacity = 0
    this.refs[`${tarObj}`].style.transform = 'scale(1, 1)'
    this.refs.closeBtn.style.backgroundColor = '#0E0D16'
  }

  projectsListClickHandler(tarObj, tarID){
    this.projectID = tarID.i
    this.props.heroBlockOpenAction()
    this.props.projectListOpenHandler()
  }

  render() {
    const self = this
    const data = this.props.data

    var projectsList = Object.keys(data).map(function(key, i) {
        var projectData = data[key]
        return <li key={i} value={key} className="projects-list-block__list"
          onClick = { () => self.projectsListClickHandler(key , {i}) }
          onMouseLeave={ () => self.projectsListMouseOutHandler(key) }
          onMouseOver={ () => self.projectsListMouseOverHandler(key, `${projectData.color}`) }>
          <h5 className="projects-company color-white">{projectData.company}</h5>
          <h2 className="projects-title color-white">{projectData.title}</h2>
          <span className="colorD" style={{ backgroundColor: `${projectData.color}` }}></span>
        </li>
    })

    var projectsBg = Object.keys(data).map(function(key, i) {
      var projectData = data[key]
      return <div key={i} ref={key} className="projects-list-view__bg-block__d" style={{ backgroundImage: `url(${projectData.listHoverBg})` }}></div>
    })

    return (
      <div ref="projectsListView" className="projects-list-view">

        <div className="canvas">
          <CanvasAnimation />
        </div>

        <section className="projects-list-view__block">

          <ul className="projects-list-block" >
            { projectsList }
          </ul>

        </section>

        <div className="projects-list-view__bg-block">
          { projectsBg }
        </div>


        <a ref="closeBtn" className="projects-list-view-close" onClick={ this.projectsListViewCloseHandler.bind(this) }>
          <span className="projects-list-view-close__icon-arrow projects-list-view-close__icon-arrow__L"></span>
          <span className="projects-list-view-close__icon-arrow projects-list-view-close__icon-arrow__R"></span>
        </a>

      </div>
    )
  }
}
