import * as types from '@/constants/actionTypes'


export default function noeinoiReducers(state = { openBool: false, projectID:0, projectLength:4, controlType: 'next' }, action) {
  switch (action.type) {
    case types.HERO_BLOCK_OPEN:
      return {...state, openBool: true}

    case types.HERO_BLOCK_CLOSE:
      return {...state, openBool: false}

    case types.PROJECT_ID:
      return {...state, projectID: action.projectID}

    case types.PROJECT_LENGTH:
      return {...state, projectLength: 0}

    case types.PROJECT_CONTROL_PREV:
      return {...state, controlType: 'prev'}

    case types.PROJECT_CONTROL_NEXT:
      return {...state, controlType: 'next'}

    default:
      return state
  }
}
