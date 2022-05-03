import { Button } from 'antd';
import styledComponents from 'styled-components';

export const ButtonWrapper = styledComponents(Button)`
    ${(props) => `
        background: ${props.background};
        color: ${props.text || props.theme.whiteClr};
        border: ${props.outline ? 'thin solid currentColor' : 'none'};
        height: ${props.height || 'unset'};
        
    `}
    &:hover{
        ${(props) => props.hover}
    }
`;
