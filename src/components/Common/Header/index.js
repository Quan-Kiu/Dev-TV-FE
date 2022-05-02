import { Dropdown, Menu } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { funcs, navMenu } from '../../../data';
import languageData from '../../../data/languge';
import { updateLang } from '../../../redux/app/action';

const Header = (props) => {
    const { lang } = useSelector(({ app }) => app);

    const dispatch = useDispatch();

    const langs = languageData.map((language, index) => ({
        label: (
            <li
                className="gx-media gx-pointer"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100px',
                }}
                key={JSON.stringify(language)}
                onClick={() => {
                    dispatch(updateLang(language));
                }}
            >
                <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
                <span className="gx-language-text">{language.name}</span>
            </li>
        ),
        key: index,
    }));
    return (
        <>
            <div className="nav-menu">
                {navMenu.map((item) => (
                    <Link key={item.key} to={item.path}>
                        <FormattedMessage id={item.label} />
                    </Link>
                ))}
            </div>

            <img src="https://creativelayers.net/themes/jobhunt-html/images/resource/logo8.png" alt="my-logo" />

            <div
                className="nav-menu"
                style={{
                    alignItems: 'center',
                }}
            >
                {funcs.map((item) => (
                    <Link key={item.key} to={item.path}>
                        <FormattedMessage id={item.label} />
                    </Link>
                ))}

                <Dropdown overlay={<Menu items={langs} />} trigger={['hover']}>
                    <i className={`flag flag-24 gx-mr-2 flag-${lang.icon}`} />
                </Dropdown>
            </div>
        </>
    );
};

Header.propTypes = {};

export default Header;
