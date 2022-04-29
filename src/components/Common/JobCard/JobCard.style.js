import styled from 'styled-components';

export const JobCardWrapper = styled.div`
    padding: 1rem 2rem;
    border: thin solid rgba(0,0,0,0.05);
    border-radius: 10px;
    &:hover {
        background: white;
    }
    background: #f4f5fa;
    transition: 0.5s;

    margin-bottom: ${(props) => {
        if (props['data-type'] === 'column') {
            return '3rem';
        }
    }}}

`;
