export const APP_ACTION = {
    updateWindowSize: 'UPDATE-WINDOW-SIZE',
    updateLang: 'UPDATE-LANG',
    setAppLoading: 'SET-APP-LOADING',
};

export const updateWindowSize = (payload) => ({
    type: APP_ACTION.updateWindowSize,
    payload,
});

export const updateLang = (payload) => ({
    type: APP_ACTION.updateLang,
    payload,
});

export const setAppLoading = (payload) => ({
    type: APP_ACTION.setAppLoading,
    payload,
});
