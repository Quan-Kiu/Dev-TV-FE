import styledComponents from 'styled-components';
import { FormattedMessage } from 'react-intl';

export const HeroWrapper = styledComponents.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    &::before{
        content: "";
        position: absolute;
        inset: 0;
        background: black;
        opacity: .5;

    }
    .hero-content{
        z-index:1;
        .hero__text{
            text-align: center;
            h1{
                line-height: 1;
                color: white;
                font-size: 5rem;
            }
            h1:first-child{
                font-weight: bold;
            }
        }
        button {
            background: ${(props) => props.theme.primaryClr};
            border: thin solid transparent;
            text-transform: uppercase;
            &:hover {
                background: ${(props) => props.theme.redClr};
                color: ${(props) => props.theme.whiteClr};
                border: thin solid transparent;
            }
        }
        
    }
`;
