export const authReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return !state;

        default:
            return state;
    }
}