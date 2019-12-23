export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr,
    }
};

export const login = () => {
    return {
        type: 'LOGIN'
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};