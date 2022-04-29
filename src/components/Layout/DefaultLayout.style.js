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
