import styledComponents from 'styled-components';

export const FooterWrapper = styledComponents.div`
.title{
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.whiteClr};
    margin-bottom: 1rem;
}
    p,a{
        display: block;
        opacity: .8;
        color: ${(props) => props.theme.secondaryClr}
    }

    a+a{
        margin-top: 1rem;
    }
`;
