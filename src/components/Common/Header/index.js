import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Divider, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import theme from '../../../configs/theme';
import { funcs, navMenu } from '../../../data';
import languageData from '../../../data/languge';
import { updateLang } from '../../../redux/app/action';

const Header = (props) => {
    const { lang, WIDTH } = useSelector(({ app }) => app);
    const [isCollapsed, setIsCollapsed] = useState(true);
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

    const collapseButton = isCollapsed ? (
        <MenuOutlined
            onClick={() => setIsCollapsed(false)}
            style={{
                color: theme.whiteClr,
                fontSize: '2.5rem',
                cursor: 'pointer',
            }}
        />
    ) : (
        <CloseOutlined
            onClick={() => setIsCollapsed(true)}
            style={{
                color: theme.whiteClr,
                fontSize: '2.5rem',
                cursor: 'pointer',
            }}
        />
    );
    return (
        <>
            {WIDTH >= 1150 && (
                <div className="nav-menu">
                    {navMenu.map((item) => (
                        <Link key={item.key} to={item.path}>
                            <FormattedMessage id={item.label} />
                        </Link>
                    ))}
                </div>
            )}

            <div
                style={{
                    color: 'white',
                    fontSize: '28px',
                    userSelect: 'none',
                    fontWeight: 'bold',
                }}
                className="logo"
            >
                Dev-TV
            </div>

            {WIDTH >= 1150 && (
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

                    <Dropdown overlay={<Menu items={langs} />} trigger={['click']}>
                        <i
                            style={{
                                cursor: 'pointer',
                            }}
                            className={`flag flag-24 gx-mr-2 flag-${lang.icon}`}
                        />
                    </Dropdown>
                </div>
            )}

            {WIDTH < 1150 && collapseButton}
            {WIDTH < 1150 && !isCollapsed && (
                <>
                    <div className="menu__collapse">
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

                            <Dropdown overlay={<Menu items={langs} />} trigger={['click']}>
                                <i
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                    className={`flag flag-24 gx-mr-2 flag-${lang.icon}`}
                                />
                            </Dropdown>
                        </div>
                        <Divider
                            style={{
                                borderColor: theme.whiteClr,
                                opacity: 0.6,
                            }}
                        />
                        <div className="nav-menu">
                            {navMenu.map((item) => (
                                <Link key={item.key} to={item.path}>
                                    <FormattedMessage id={item.label} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

Header.propTypes = {};

export default Header;
