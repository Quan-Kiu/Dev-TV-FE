import { Layout } from 'antd';
import styled from 'styled-components';

export const LayoutWrapper = styled(Layout)`
    background: white;
    .ant-layout-header {
        background: #26ae61;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8rem;

        .menu__collapse {
            padding: 3rem 5rem;
            background: #040e2b;
            z-index: 2;
            position: absolute;
            inset: 0;
            top: 8rem;
            .nav-menu:last-child {
                margin-top: 4rem;
                flex-direction: column;
                gap: 4rem;
                a {
                    font-size: 2rem;
                }
                a:first-child {
                    margin-left: unset;
                }
            }
            .nav-menu {
                a {
                    &:hover {
                        color: ${(props) => props.theme.whiteClr};
                    }
                    order: 2;
                    cursor: 'pointer';
                }
                a:first-child {
                    margin-left: auto;
                }
                i {
                    order: 1;
                }
            }
        }

        .nav-menu {
            &:last-child {
                justify-content: flex-end;
            }
            flex: 1;
            display: flex;
            gap: 1.5rem;
            a {
                font-weight: medium;
                transition: 0.3s;
                color: white;

                &:hover {
                    color: black;
                }
            }
        }
    }
`;
