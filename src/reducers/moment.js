const initialState = {
  user: {
    userName: '',
    profilePic: '',
    skills: [],
    activeEvent: '',
    userId: '',
    timeToSpare: 0,
    activeSkill: '',
    activeJob: null
  },
  moments: [],
}

const moment = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOMENTS':
      return {
        ...state,
        moments: action.val
      }
    case 'UPDATE_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.val
        }
      }
    case 'UPDATE_PROFILE_PIC':
      return {
        ...state,
        user: {
          ...state.user,
          profilePic: action.val
        }
      }
    case 'UPDATE_SKILLS':
      return {
        ...state,
        user: {
          ...state.user,
          skills: action.val
        }
      }
    case 'UPDATE_USER_ID':
      return {
        ...state,
        user: {
          ...state.user,
          userId: action.val
        }
      }
    case 'UPDATE_TIME_TO_SPARE':
      return {
        ...state,
        user: {
          ...state.user,
          timeToSpare: action.val
        }
      }
    case 'UPDATE_ACTIVE_SKILL':
      return {
        ...state,
        user: {
          ...state.user,
          activeSkill: action.val
        }
      }
    case 'UPDATE_ACTIVE_JOB':
      return {
        ...state,
        user: {
          ...state.user,
          activeJob: action.val
        }
      }
    default:
      return state
  }
}

export default moment
