export const APP_ACTION = {
    updateWindowSize: 'UPDATE-WINDOW-SIZE',
    updateLang: 'UPDATE-LANG',
};

export const updateWindowSize = (payload) => ({
    type: APP_ACTION.updateWindowSize,
    payload,
});

export const updateLang = (payload) => ({
    type: APP_ACTION.updateLang,
    payload,
});
