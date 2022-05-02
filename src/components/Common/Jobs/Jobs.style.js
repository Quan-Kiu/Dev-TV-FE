import styledComponents from 'styled-components';

export const JobsWrapper = styledComponents.div`
.title{
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
.jobs{
    & > .ant-row > .ant-col{
            width: 100%;
    }
}

`;
