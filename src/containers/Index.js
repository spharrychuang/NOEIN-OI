import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group' // ES6
// Components
import HeroBlock        from 'components/view/HeroBlock'
import ProjectsListView from 'components/view/ProjectsListView'
import AboutView        from 'components/view/AboutView'
import LabView          from 'components/view/LabView'
import ColorD           from 'components/view/ColorD'
// Styles
import '@/assets/sass/styles'
// Actions
import { heroBlockOpenAction, heroBlockCloseAction, projectIdAction, projectControlPrevAction, projectControlNextAction } from '@/actions/noeinoiActions'

@connect(
  state => ({
    heroBlockOpenBool: state.noeinoiReducers.openBool,
    projectID: state.noeinoiReducers.projectID,
    projectLength: state.noeinoiReducers.projectLength,
    controlType: state.noeinoiReducers.controlType
  }),
  dispatch => bindActionCreators({
    heroBlockOpenAction, heroBlockCloseAction,
    projectIdAction,
    projectControlPrevAction, projectControlNextAction
  }, dispatch)
)

export default class Index extends Component {

  constructor() {
    super()

    // Handelr
    this.onMouseWheelHandler      = this.onMouseWheelHandler.bind(this)
    this.projectOnScrollHandler   = this.projectOnScrollHandler.bind(this)
    this.mouseWheelTypeSetHandler = this.mouseWheelTypeSetHandler.bind(this)
    this.getProjectID             = this.getProjectID.bind(this)
    this.projectListOpenHandler   = this.projectListOpenHandler.bind(this)
    this.aboutOpenHandler         = this.aboutOpenHandler.bind(this)
    this.labOpenHandler           = this.labOpenHandler.bind(this)
    this.gotoProjectHandler       = this.gotoProjectHandler.bind(this)

    // public vars
    this.mouseWheelType = false
    this.mouseWheelTypeInterval = null

    // state
    this.state = {
      projectOpenBool : false,
      aboutOpenBool   : false,
      labOpenBool     : false
    }

    // projects data
    this.data = {
      project0: {
        company:'KKday',
        title:'Travel Expert APP',
        type: '# APP UI/UX',
        date:'In late Jul, 2017',
        heroPhoto:'./images/projects/KKdayTravelExpertUI-tmp01.jpg',
        intro: "Planning KKday APP branding. This is KKday's first APP Mainly used to search the tourist city of Expert articles, and add the Raiders notes function, so that tourists can write their own Raiders notes, and share to friends. In the brand of elements, the color will be more lively and lively.",
        typo: './images/projects/typo-kkday.png',
        role: 'Design, Interface & Branding',
        color:'#1CCEDD',
        subColor:'#FFC410',
        darkColor:'#0E0E11',
        txtColor: '#0E0D16',
        listHoverBg: './images/projects/KKdayTravelExpertUI-tmp03.jpg',
        linkData: { linkP:true, website:'', appStore:'https://itunes.apple.com/tw/app/kkday-guide/id1227613054?l=zh&mt=8', googlePlay:'coming' }
      },
      project1: {
        company:'Tyler',
        title:'Smart Watch APP',
        type: '# APP UI/UX',
        date:'Aug 22, 2015',
        heroPhoto:'./images/projects/TylerSmartWatch-tmp01.jpg',
        intro: "Tyler Smart Watch is a manufacturer of smart watches. Main classic watches, and join the wisdom system. In the brand to the distinguished as the guide, suggesting its texture. And different from other smart watches, it is the main mechanical institutions. APP main function and watch connection, get time, movement and notification function.",
        typo: './images/projects/typo-tyler.png',
        role: 'Design, Interface & Branding',
        color:'#C78A8A',
        subColor:'#D9D9D9',
        darkColor:'#151515',
        txtColor: '#FFFFFF',
        listHoverBg: './images/projects/TylerSmartWatch-tmp02.jpg',
        linkData: { linkP:false, website:'', appStore:'', googlePlay:'' }
      },
      project2: {
        company:'iEduer',
        title:'Learning Portal',
        type: '# APP UI/UX',
        date:'May 29, 2017',
        heroPhoto:'./images/projects/iEduerLearningPortal-tmp01.jpg',
        intro: "IEduer is a startup for an online learning platform. APP mainly for students to use, so that students can quickly find a favorite teacher, and direct class. After the teacher and the student's classroom interaction, for students to calculate their learning performance, in order to obtain the student's learning curve. Through the interaction of the content, so that students can more effectively enhance their ability.",
        typo: './images/projects/typo-ied.png',
        role: 'Design, Interface & Branding',
        color:'#36ABF1',
        subColor:'#FED002',
        darkColor:'#10111A',
        txtColor: '#10111A',
        listHoverBg: './images/projects/iEduerLearningPortal-tmp01.jpg',
        linkData: { linkP:true, website:'', appStore:'coming', googlePlay:'coming' }
      },
      project3: {
        company:'TutorMing',
        title:'Lesson Library',
        type: '# WEB UI/UX',
        date:'Jan 17, 2017',
        heroPhoto:'./images/projects/TMLessonLibraryUI-tmp03.jpg',
        intro: "Lesson Library for TutorMing small packaging language platform, providing small package content, so that users are more willing to spend much money to experience the course. In the part of the textbook to provide a variety of directions for the user to choose, and distinguish the level. This platform also helps marketers to more easily promote the Chinese platform.",
        typo: './images/projects/typo-tm-02.png',
        role: 'Design, Interface & Front-End Dev',
        color:'#3BECD0',
        subColor:'#FF435A',
        darkColor:'#363654',
        txtColor: '#FFFFFF',
        listHoverBg: './images/projects/TMLessonLibraryUI-tmp01.jpg',
        linkData: { linkP:true, website:'https://www.tutorming.com/lesson-library', appStore:'', googlePlay:'' }
      },
      project4: {
        company:'TutorMing',
        title:'Learning Portal',
        type: '# APP & WEB UI/UX',
        date:'Apr 30, 2016',
        heroPhoto:'./images/projects/TMLearningPortalUI-tmp08.jpg',
        intro: "TutorMing for my predecessor company, specifically for Europe and the United States to build a platform to learn Chinese. Mainly for the TutorMing brand remodeling, so that the brand is more young and modern. Redesign the web and APP user experience, make it easier for users to book and class, and to review the past course more easily. On the line, a lot of reduced customer service work. In the overall brand image is also more international, more brand persuasive.",
        typo: './images/projects/typo-tm.png',
        role: 'Design, Interface, Rebranding & Front-End Dev',
        color:'#FF435A',
        subColor:'#7DE4D4',
        darkColor:'#363654',
        txtColor: '#FFFFFF',
        listHoverBg: './images/projects/TMLearningPortalUI-tmp07.jpg',
        linkData: { linkP:true, website:'https://www.tutorming.com/learning-portal', appStore:'https://itunes.apple.com/app/id1092419504', googlePlay:'https://play.google.com/store/apps/details?id=com.tutorming.www.tutormingclassroom' }
      },
      project5: {
        company:'Harry Chuang',
        title:'Other Projects',
        type: '# APP & WEB UI/UX, Graphic & Product Design',
        date:'2015 - 2016',
        heroPhoto:'./images/projects/OtherProjects-tmp01.jpg',
        intro: "",
        typo: '',
        role: '',
        color:'#F5E51B',
        subColor:'#29F1C5',
        darkColor:'#0E0D16',
        txtColor: '#FFFFFF',
        listHoverBg: './images/projects/OtherProjects-tmp02.jpg',
        linkData: { linkP:false, website:'', appStore:'', googlePlay:'' }
      }
    }

    this.projectLength = 6;

  }


  componentDidMount(){
    this.mouseWheelTypeInterval = setInterval(this.mouseWheelTypeSetHandler, 1500)
    this.getProjectID()
  }

  componentWillUnmount () {
    // clearInterval(this.mouseWheelTypeInterval)
  }

  getProjectID(){

    var projectID = this.props.projectID + 1
    var bitsProjectID = "0000000000" + parseInt(projectID, 10).toString(2)

    bitsProjectID = bitsProjectID.substring(bitsProjectID.length-10,bitsProjectID.length)

    // 轉換 01 => OI
    bitsProjectID = bitsProjectID.replace(/1/g, "I")
    bitsProjectID = bitsProjectID.replace(/0/g, "O")

    var binaryProjectID = this.refs.binaryProjectID

    shuffleLetters(binaryProjectID, {
      text: bitsProjectID,
      step: 20,
      fps: 30
    });

  }


  projectsControlHandler(tarType){

    if(tarType === 'prev'){

      if( (this.props.projectID-1 ) < 0 ){
        this.props.projectIdAction(this.projectLength - 1);
      }else{
        this.props.projectIdAction(this.props.projectID - 1);
      }

      this.props.projectControlPrevAction()

    }else{

      if( (this.props.projectID+1) >= this.projectLength ){
        this.props.projectIdAction(0);
      }else{
        this.props.projectIdAction(this.props.projectID + 1);
      }

      this.props.projectControlNextAction()

    }

  }


  gotoProjectHandler(tarID){
    this.props.projectIdAction(tarID)
  }


  heroBlockOpenHandler(){

    var tarObj = this.heroBlock.refs.projectBlock
    var closeAction = this.props.heroBlockCloseAction()

    if( this.props.heroBlockOpenBool === false ){

      this.props.heroBlockOpenAction()

    }else if(this.props.heroBlockOpenBool === true){

      TweenMax.to(tarObj, 0.6, { scrollTop:0, ease:Expo.easeInOut, onComplete: function fin(){
          closeAction
      } })

    }

  }


  renderProject() {

    let project = this.data[`project${this.props.projectID}`]

    return (
      <HeroBlock
        ref={ (projectBlock) => { this.heroBlock = projectBlock; } }
        key = { this.props.projectID }
        projectID = { this.props.projectID }
        heroBlockOpenAction = { this.props.heroBlockOpenAction }
        heroBlockCloseAction  = { this.props.heroBlockCloseAction }
        heroBlockOpenBool = { this.props.heroBlockOpenBool }
        controlType = { this.props.controlType }
        company = { project.company }
        title = { project.title }
        type  = { project.type }
        date  = { project.date }
        intro = { project.intro }
        typo  = { project.typo }
        role  = { project.role }
        color = { project.color }
        subColor  = { project.subColor }
        darkColor = { project.darkColor }
        heroPhoto = { project.heroPhoto }
        txtColor  = { project.txtColor }
        linkData = { project.linkData }
        projectOnScrollHandler  = { this.projectOnScrollHandler }
      />
    )

  }


  renderColorD() {

    let project = this.data[`project${this.props.projectID}`]

    let body = document.getElementsByTagName("body")
    // body[0].style.backgroundColor = project.color

    return (
      <ColorD
        key={this.props.projectID}
        projectID={this.props.projectID}
        controlType={this.props.controlType}
        color={project.color}
      />
    )

  }


  mouseWheelTypeSetHandler() {
    this.mouseWheelType = false
  }


  onMouseWheelHandler(e){

    if(e.deltaY < -80 && this.mouseWheelType === false && this.props.heroBlockOpenBool === false){
      this.mouseWheelType = true
      this.projectsControlHandler('prev')
    }else if(e.deltaY > 80 && this.mouseWheelType === false && this.props.heroBlockOpenBool === false){
      this.mouseWheelType = true
      this.projectsControlHandler('next')
    }

  }


  projectOnScrollHandler(obj, deltaY){

    var objHeight = obj.scrollHeight - obj.clientHeight

    if(obj.scrollTop === objHeight && this.mouseWheelType === false && this.props.heroBlockOpenBool === true && deltaY > 150){
      this.mouseWheelType = true
      this.projectsControlHandler('next')
    }

  }


  projectListOpenHandler(){

    if(this.state.projectOpenBool === false){
      this.setState({ projectOpenBool: true })
    }else{
      this.setState({ projectOpenBool: false })
    }

  }


  aboutOpenHandler(){

    if(this.state.aboutOpenBool === false){
      this.setState({ aboutOpenBool: true })
    }else{
      this.setState({ aboutOpenBool: false })
    }

  }

  labOpenHandler(){

    if(this.state.labOpenBool === false){
      this.setState({ labOpenBool: true })
    }else{
      this.setState({ labOpenBool: false })
    }

  }


  render() {
    const { store } = this.props

    let project = this.data[`project${this.props.projectID}`]
    this.getProjectID()

    return (
      <Provider store={store}>
        <div className="home-container">

          <div className="home-container__block" onWheel={this.onMouseWheelHandler.bind(this)}>

              {/* header [start] */}
              <header className="noeinoi-header">
                <h1 className="noeinoi-header__logo"></h1>
                <nav className="noeinoi-header__nav font-s-20">
                  <a className="hidden-xs noeinoi-header__nav__link" onClick={this.aboutOpenHandler.bind(this)}>About</a>
                  <a className="hidden-xs noeinoi-header__nav__link" onClick={this.labOpenHandler.bind(this)}>Lab</a>
                  <a className="hidden-xs noeinoi-header__nav__link" onClick={this.projectListOpenHandler.bind(this)}>Projects</a>
                </nav>
                <nav className="visible-xs noeinoi-header__nav font-s-20">
                  <a className="noeinoi-header__nav__link noeinoi-header__nav__link--mobile" onClick={this.labOpenHandler.bind(this)}><img src="./images/icon-lab.svg" width="32px" /></a>
                  <a className="noeinoi-header__nav__link noeinoi-header__nav__link--mobile" onClick={this.aboutOpenHandler.bind(this)}><img src="./images/icon-about.svg" width="32px" /></a>
                </nav>
              </header> {/* header [end] */}

              {/* Color D */}
              <div ref="noeinoiD" className="noeinoi-d">

                <TransitionGroup component="div">
                  {
                    this.renderColorD()
                  }
                </TransitionGroup>

              </div>


              {/* page list [start] */}
              <div className={`noeinoi-page-list ${this.props.heroBlockOpenBool === true ? 'noeinoi-page-list--open' : ''} `}>
                <h1 ref="binaryProjectID" className="noeinoi-page-list__oi"></h1>
                <h1 className="noeinoi-page-list__list"><b>IIIIII</b></h1>
                <h3 ref="timerSecond" className="font-s-36"></h3>
              </div>

              {/* Hero Block */}
              <TransitionGroup component="div">
                {
                  this.renderProject()
                }
              </TransitionGroup>

              <div className={`scroll-tip ${this.props.heroBlockOpenBool === true ? 'scroll-tip--show' : ''}`}>
                <p className="scroll-tip__txt">Scroll To Explore</p>
                <span className="scroll-tip__ani" >
                  <span className="scroll-tip__ani__line" style={{ backgroundColor:`${ project.color }` }}></span>
                </span>
              </div>

              {/* Hero Block Control [start] */}
              <nav className="hero-block-control">
                <a className="hero-block-control__button hero-block-control__button__list" style={{ backgroundColor:`${project.color}` }} onClick={this.projectListOpenHandler.bind(this)}></a>
                <a className="hero-block-control__button hero-block-control__button__prev" style={{ backgroundColor:`${project.color}` }} onClick={this.projectsControlHandler.bind(this, 'prev')}></a>
                <a className="hero-block-control__button hero-block-control__button__next" style={{ backgroundColor:`${project.color}` }} onClick={this.projectsControlHandler.bind(this, 'next')}></a>
              </nav>  {/* Hero Block Control [end] */}

              {/* footer [start] */}
              <footer className="hidden-xs noeinoi-footer">
                <nav className="social-nav">
                  <a className="social-nav__button social-nav__button__fb" href="https://www.facebook.com/NOEIN.fb/" target="_blank"></a>
                  {/* <a className="social-nav__button social-nav__button__google" href="" target="_blank"></a> */}
                  <a className="social-nav__button social-nav__button__linkedlin" href="https://www.linkedin.com/in/harrychuang/" target="_blank"></a>
                </nav>
                <p className="noeinoi-footer__copy font-s-14">Copyright © HarryChuang StylE All Rights Reserved.</p>
              </footer> {/* footer [end] */}


              {/* Hero Block Func Button [start] */}
              <a className={`hero-block-switch ${this.props.heroBlockOpenBool === true ? 'hero-block-switch--open' : ''} `} style={{ backgroundColor:`${project.color}` }} onClick={ this.heroBlockOpenHandler.bind(this) }>
                <span className="hero-block-switch__icon-arrow hero-block-switch__icon-arrow__L"></span>
                <span className="hero-block-switch__icon-arrow hero-block-switch__icon-arrow__R"></span>
              </a>  {/* Hero Block Func Button [end] */}


              {/* awwwards ribbins */}
              <div id="awwwards" className="hidden-xs awwwards-hm-ribbons">
                <a href="https://www.awwwards.com/sites/noein-oi" target="_blank"></a>
              </div>


          </div>

          {/* Project List View */}
          <TransitionGroup component="div">
            {
              this.state.projectOpenBool === false ? '' : <ProjectsListView data={this.data} heroBlockOpenAction = { this.props.heroBlockOpenAction } projectListOpenHandler={this.projectListOpenHandler} gotoProjectHandler={this.gotoProjectHandler} />
            }
          </TransitionGroup>


          {/* About View */}
          <TransitionGroup component="div">
            {
              this.state.aboutOpenBool === false ? '' : <AboutView aboutOpenHandler={this.aboutOpenHandler} />
            }
          </TransitionGroup>

          {/* About View */}
          <TransitionGroup component="div">
            {
              this.state.labOpenBool === false ? '' : <LabView labOpenHandler={this.labOpenHandler} />
            }
          </TransitionGroup>


        </div>
      </Provider>
    )
  }
}

Index.propTypes = {
  store: PropTypes.object.isRequired
}
