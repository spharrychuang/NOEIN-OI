import React, { Component } from 'react'
// Styles
import '@/assets/sass/styles'
// Actions
import { heroBlockOpenAction, heroBlockCloseAction } from '@/actions/noeinoiActions'


export default class HeroBlock extends Component {

  constructor() {
    super()
  }

  componentWillEnter(callback){

    var objBlock = this.refs.colorBlock
    var objRotationX = ''
    var objMoveTop = ''
    var objMoveSkew = ''
    var objMoveSkew02 = ''

    if(this.props.controlType === 'next'){
      objMoveTop = '200vh'
      objMoveSkew = '-180deg'
      objMoveSkew02 = '-30deg'
    }else if(this.props.controlType === 'prev'){
      objMoveTop = '-200vh'
      objMoveSkew = '180deg'
      objMoveSkew02 = '30deg'
    }

    TweenMax.set(objBlock, {transformPerspective:400, zIndex:0})

    TweenMax.fromTo(objBlock, 0.6, {
      marginTop:`${objMoveTop}`,
      skewX:`${objMoveSkew02}`,
      skewY:`${objMoveSkew}`
    }, {
      marginTop:0,
      skewX:"0deg",
      skewY:"0deg",
      ease: Quart.easeOut,
      onComplete:callback
    });

  }

  componentWillLeave(callback){

    var objBlock = this.refs.colorBlock
    var objRotationX = ''
    var objMoveTop = ''
    var objMoveSkew = ''

    if(this.props.controlType === 'next'){
      objMoveTop = '-200vh'
      objMoveSkew = '-60deg'
    }else if(this.props.controlType === 'prev'){
      objMoveTop = '200vh'
      objMoveSkew = '60deg'
    }

    TweenMax.set(objBlock, {transformPerspective:400, zIndex:1})

    TweenMax.fromTo(objBlock, 0.6, {
      marginTop:0,
      skewX:"0deg",
      skewY:"0deg"
    }, {
      marginTop:`${objMoveTop}`,
      // skewY:`${objMoveSkew}`,
      ease: Quart.easeIn,
      onComplete:callback
    });

  }

  render() {
    return (
      <div ref="colorBlock" className="noeinoi-d__color-block" style={{ backgroundColor:`${this.props.color}` }}></div>
    )
  }
}
