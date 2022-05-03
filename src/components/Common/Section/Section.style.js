import styledComponents from 'styled-components';

export const SectionWrapper = styledComponents.div`
    text-align: center;
    margin-bottom:4rem;
    padding: 2rem 0;
    & > .title{
        font-size: 3rem;
        font-weight: bold;

    }
    & > .desc{
        width: 50rem;
        margin: 0 auto;
        opacity: .7;
        font-size: 15px;
        margin-bottom: 5rem;
        
    }
`;
