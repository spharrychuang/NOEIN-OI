import { combineReducers } from 'redux'
import sys from './sys'
import processing from './processing'
import routeData from './routeData'
import noeinoiReducers from './noeinoiReducers'

const reducer = combineReducers({
  sys,
  processing,
  routeData,
  noeinoiReducers
})

export default reducer
