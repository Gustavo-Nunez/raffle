let defaultState = {
    user: {
        firstName: '',
        lastName: '',
        userId: 0
    }
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === 'REGISTER_USER'){
        console.log(action)
        return{
            ...state,
            firstName: action.firstName,
            lastName: action.lastName,
            userId: action.userId
        }
    }
    else{
        return{
            ...state
        }
    }
}

export default mainReducer;