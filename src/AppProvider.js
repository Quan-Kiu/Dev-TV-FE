import { ConfigProvider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './configs/theme';
import { IntlProvider } from 'react-intl';
import AppLocale from './configs/translation';

const AppProvider = ({ children }) => {
    const { lang } = useSelector(({ app }) => app);

    const currentAppLocale = AppLocale[lang.locale];
    return (
        <ConfigProvider locale={currentAppLocale.locale}>
            <IntlProvider messages={currentAppLocale.messages} locale={currentAppLocale.locale}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>;
            </IntlProvider>
        </ConfigProvider>
    );
};

AppProvider.propTypes = {};

export default AppProvider;
