const initialState: Auth = {
    authenticated: false,
    token: ''
}

function AuthReducer(state: Auth = initialState, actions: any) {
    const newState = {...state};
    switch (actions.type) {
        case 'set-token':
            newState.authenticated = true;
            newState.token = actions.payload;
            return newState;
        case 'remove-token':
            newState.authenticated = false;
            newState.token = '';
            return newState;
        default:
            return state;
    }
}

export default AuthReducer;