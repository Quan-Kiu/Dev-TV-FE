import styledComponents from 'styled-components';

export const WhoAreYouWrapper = styledComponents.div`
    margin: 4rem 0;
    background: ${(props) => `url(${props['data-background']});`}
    height: 50rem;
    background-position: center;
    background-size: cover;
    position: relative;
    display:flex;
    align-items: center;
    &::before{
        content: "";
        position: absolute; 
        inset: 0;
        background: ${(props) => props.theme[props['pseudo-bg']]};
        opacity: .7;
    }
    .content{
        padding:3rem;
        z-index:1;
        color: ${(props) => props.theme.whiteClr};
        .title{
            font-size: 4rem;
            text-transform: uppercase;
        }
        .desc{
            margin: 2rem 0;
        }
    }
`;
