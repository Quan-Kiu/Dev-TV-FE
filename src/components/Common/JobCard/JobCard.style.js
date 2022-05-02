import styled from 'styled-components';

export const JobCardWrapper = styled.div`
    padding: 4rem;
    border: thin solid rgba(0, 0, 0, 0.05);
    &:hover {
        background: white;
    }
    background: #f4f5fa;
    transition: 0.5s;

    ${(props) => {
        if (props['data-type'] === 'column') {
            return `
            padding: 1rem 2rem;
            &:hover{
                    position: relative;
                    transform: translateY(-15px);
                }
                .ant-col:last-child{
                    margin-left: auto;
                }
            `;
        }
    }}

    img {
        display: block;
        margin: 0 auto;
    }
`;
