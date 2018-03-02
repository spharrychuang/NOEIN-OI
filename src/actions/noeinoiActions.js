import * as types from '@/constants/actionTypes'


export const heroBlockOpenAction = () => {
  return {
    type : types.HERO_BLOCK_OPEN
  }
}

export const heroBlockCloseAction = () => {
  return {
    type : types.HERO_BLOCK_CLOSE
  }
}

export const projectIdAction = (projectID=0) => {
  return {
    type : types.PROJECT_ID,
    projectID: projectID
  }
}

export const projectControlPrevAction = () => {
  return {
    type : types.PROJECT_CONTROL_PREV
  }
}

export const projectControlNextAction = () => {
  return {
    type : types.PROJECT_CONTROL_NEXT
  }
}
