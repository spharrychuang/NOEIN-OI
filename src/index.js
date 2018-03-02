import 'babel-polyfill'
import 'fetch-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from 'reducers'
import createSagaMiddleware from 'redux-saga'
import domready from 'domready'
import rootSaga from '@/sagas/rootSaga'
import { DEVELOPMENT } from '@/constants/config'
import Index from '@/containers/Index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
if (process.env.NODE_ENV === DEVELOPMENT) {
  middlewares.push(createLogger())
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)
sagaMiddleware.run(rootSaga)

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )

domready(() => {
  render(Index)
})


if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
  // module.hot.accept()
  // 模塊拆分單純時下面這樣用也可以
  module.hot.accept('./containers/Index', () => {
    const NewRoot = require('./containers/Index').default
    render(NewRoot)
  })
}
