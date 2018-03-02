import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Layer, Line, Circle, Arc, Stage, Group} from 'react-konva'
// Styles
import '@/assets/sass/styles'


export default class CanvasAnimation extends Component {

  constructor() {
    super()

    this.state = {
      winWidth: 0,
      winHeight: 0
    }

    this.winResizeHandler = this.winResizeHandler.bind(this)

  }

  componentDidMount(){
    window.addEventListener("resize", this.winResizeHandler)
    this.winResizeHandler()
  }

  winResizeHandler(){
    this.setState({ winWidth: window.innerWidth, winHeight: window.innerHeight })
  }

  render() {
    return (
      <Stage width={ this.state.winWidth } height={ this.state.winHeight }>
        <Layer>
            <OIAnimation winW={this.state.winWidth} winH={this.state.winHeight} />
        </Layer>
      </Stage>
    )
  }

}

class OIAnimation extends React.Component {

    constructor(...args) {

      super(...args)

      this.state = {
        color: ['#FF435A', '#FFED00', '#C2E700', '#29F1C5', '#8778D5', '#449AFF'],
        strokeWidth: [ 4, 6, 8 ],
        arcAnimationInterval: null,
        lineAnimationInterval: null
      }

      this.getLine        = this.getLine.bind(this)
      this.getArc         = this.getArc.bind(this)
      this.arcAnimation   = this.arcAnimation.bind(this)
      this.lineAnimation  = this.lineAnimation.bind(this)

      this.arcAniInterval = null
      this.lineAniInterval = null

      this.arcGroup = []
      this.arcNum = 10
      this.arcTimes = 0

      this.lineGroup = []
      this.lineNum = 10
      this.lineTimes = 0

    }

    componentDidMount(){
      var intervalTime = 800
      this.arcAniInterval = setInterval(this.arcAnimation, intervalTime)
      this.lineAniInterval = setInterval(this.lineAnimation, intervalTime)
      this.arcAnimation()
      this.arcAnimation()
      this.lineAnimation()
      this.lineAnimation()
    }

    componentWillUnmount () {
      clearInterval(this.arcAniInterval)
      clearInterval(this.lineAniInterval)

      for (var i = 0; i < this.arcNum; i++) {
        var arcObj = this.refs[`arc${i}`]
        TweenMax.killTweensOf(arcObj)
      }
      for (var j = 0; j < this.lineNum; j++) {
        var lineObj = this.refs[`line${j}`]
        TweenMax.killTweensOf(lineObj)
      }

      // TweenMax.killAll()

    }

    getLine(tarID){
      let lineGroup = []
      let refID = 'line' + tarID

      return (
        <Line
          key={tarID}
          ref={refID}
          opacity={0}
          points={[0, 0, 0, 0]}
        />
      )

    }


    lineAnimation(){

      const lineGroup = this.lineGroup

      this.lineTimes = this.lineTimes + 1

      if(this.lineTimes >= this.lineNum){
        this.lineTimes = 0
      }

      let line = this.refs[`line${this.lineTimes}`]
      let posX = window.innerWidth * Math.random()
      let posY = window.innerHeight * Math.random()
      let pos = -50 + (Math.random() * -100)
      let lineLength   = 60 + 200 * Math.random()
      let points0 = [posX, posY, posX, posY]
      let points1 = [posX + pos, posY + pos, posX - lineLength + pos, posY - lineLength + pos]
      let points2 = [posX - lineLength + pos, posY - lineLength + pos, posX - lineLength + pos, posY - lineLength + pos]
      let color = this.state.color[Math.round(Math.random() * 5)]
      let strokeWidth = this.state.strokeWidth[Math.round(Math.random() * 2)]
      let durationTime = 1.5 + Math.random()*2

      TweenMax.fromTo(line, 2, {
        konva: {
          autoDraw:false,
          points: points0,
          stroke: color,
          opacity: 0,
          strokeWidth: 0,
          lineCap:'round'
        }
      },{
        konva: {
          opacity: 1,
          points: points1,
          strokeWidth: strokeWidth
        },
        delay: Math.random()*1,
        ease:Expo.easeIn,
        onComplete: function fin(){

          TweenMax.to(line, 1.5, {
            konva: {
              opacity: 0,
              points: points2,
              strokeWidth: 0
            },
            ease:Expo.easeOut
          })

        }
      })


    }

    getArc(tarID){
      let arcGroup = []
      let refID = 'arc' + tarID

      return (
        <Arc
          key={tarID}
          ref={refID}
        />
      )

    }


    arcAnimation(){

      const arcGroup = this.arcGroup

      this.arcTimes = this.arcTimes + 1

      if(this.arcTimes >= this.arcNum){
        this.arcTimes = 0
      }

      let arc = this.refs[`arc${this.arcTimes}`]
      let rad   = 10 + 50 * Math.random()
      let posX = window.innerWidth * Math.random()
      let posY = window.innerHeight * Math.random()
      let color = this.state.color[Math.round(Math.random() * 5)]
      let strokeWidth = this.state.strokeWidth[Math.round(Math.random() * 2)]
      let rotation = Math.random()*360
      let durationTime = 1 + Math.random()*2

      TweenMax.fromTo(arc, 2, {
        konva: {
          autoDraw:false,
          innerRadius:rad,
          outerRadius:rad,
          x:posX,
          y:posY,
          fill:color,
          rotation: rotation,
          angle:0
        }
      },{
        konva: {
          innerRadius:rad,
          outerRadius:rad+strokeWidth,
          rotation: rotation + 60,
          angle:360
        },
        delay: Math.random()*1.5,
        ease:Expo.easeIn,
        onComplete: function fin(){

          TweenMax.to(arc, 1.5, {
            konva: {
              innerRadius:rad,
              outerRadius:rad
            },
            delay: 0.1,
            ease:Expo.easeOut
          })

        }
      })


    }


    render() {

      let arcGroup = []
      for (var i = 0; i < this.arcNum; i++) {
        arcGroup.push( this.getArc(i) )
      }
      this.arcGroup = arcGroup

      let lineGroup = []
      for (var j = 0; j < this.lineNum; j++) {
       lineGroup.push( this.getLine(j) )
      }
      this.lineGroup = lineGroup

      return (
        <Group>
          { this.lineGroup }
          { this.arcGroup }
        </Group>
      )

    }

}
