import { APP_ACTION } from './action';

const initialState = {
    WIDTH: window.innerWidth,
    lang: {
        id: 'viet-nam',
        locale: 'vi',
        name: 'Việt Nam',
        icon: 'vn',
    },
    appLoading: null,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTION.updateWindowSize:
            return {
                ...state,
                WIDTH: action.payload,
            };
        case APP_ACTION.updateLang:
            return {
                ...state,
                lang: action.payload,
            };
        case APP_ACTION.setAppLoading:
            return {
                ...state,
                appLoading: action.payload,
            };
        default:
            return state;
    }
};

export default app;
