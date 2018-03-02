import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Components
import CanvasAnimation from 'components/view/CanvasAnimation'
// Styles
import '@/assets/sass/styles'


export default class LabView extends Component {

  constructor() {
    super()
    this.viewCloseHandler = this.viewCloseHandler.bind(this)
    this.getLabsListHandler = this.getLabsListHandler.bind(this)

    // projects data
    this.data = [
      { labsListInfo: {
        subTitle: 'Review pop demo',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154680309580869/' }
      },
      { labsListInfo: {
        subTitle: 'List open content',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154341858105869/' }
      },
      { labsListInfo: {
        subTitle: 'Particle Test',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154337346515869/'}
      },
      { labsListInfo: {
        subTitle: 'Animation Repeat',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154553774355869/'}
      },
      { labsListInfo: {
        subTitle: 'Digital Clock',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154400961150869/'}
      },
      { labsListInfo: {
        subTitle: 'Loop with animation',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154352463250869/'}
      },
      { labsListInfo: {
        subTitle: 'Hero block scroll',
        link:'https://www.facebook.com/fuhsiang.chuang/videos/10154536523680869/'}
      }
    ]

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

    var objBlock = this.refs.containerView

    TweenMax.fromTo(objBlock, 0.1, {
      height: '20%'
    }, {
      height: '100%',
      ease: Expo.easeOut,
      onComplete:callback
    })

  }

  componentWillLeave(callback){

    var objBlock = this.refs.containerView

    TweenMax.fromTo(objBlock, 0.1, {
      height: '90%'
    }, {
      height: '0%',
      ease: Expo.easeOut,
      onComplete:callback
    });

  }

  viewCloseHandler(){
    this.props.labOpenHandler()
  }


  getLabsListHandler(){

    const labsList = this.data

    const listItems = labsList.map((list, i) =>
      <div key={i} className="labs-list col-sm-6 col-md-4 col-lg-3">

        <section className="lab-videos__info">
          <h4 className="lab-videos__info__title"><b>NO.{i+1}</b> <span className="lab-videos__info__sub-title">{list.labsListInfo.subTitle}</span></h4>
          {/* <h5 className="lab-videos__info__sub-title"></h5> */}
          <a href={`${list.labsListInfo.link}`} target="_blank" className="lab-videos__info__link">Link ></a>
        </section>

        <div className="videoIframe-block">
          <iframe className="videoIframe-block__iframe" src={`https://www.facebook.com/plugins/video.php?href=${list.labsListInfo.link}&width=500&show_text=false&height=893&appId`} style={{ border:'none',overflow:'hidden' }} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
        </div>

      </div>
    )

    return listItems

  }


  render() {

    const listItems = this.getLabsListHandler()

    return (
      <div ref="containerView" className="lab-view">

        {/* <div className="canvas">
          <CanvasAnimation />
        </div> */}

        <section className="lab-view__intro">

          <h2 className="intro-txt">
            <span className="labs-title color-grey">Origami.Design Labs</span><br/>
          </h2>
          <a className="lab-link" href="https://www.facebook.com/groups/Origami.Design.tw/" target="_blank">Origami.Design.tw FB.Groups</a>
          <hr />

          <section className="lab-videos">

              { listItems }

          </section>

        </section>

        <a ref="closeBtn" className="pop-close-btn" onClick={ this.viewCloseHandler.bind(this) }>
          <span className="pop-close-btn__icon-arrow pop-close-btn__icon-arrow__L"></span>
          <span className="pop-close-btn__icon-arrow pop-close-btn__icon-arrow__R"></span>
        </a>

      </div>
    )
  }
}
