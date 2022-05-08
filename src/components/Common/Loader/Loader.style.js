import styledComponents from "styled-components";

export const LoaderWrapper = styledComponents.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
inset: 0;
z-index:1000000000000;
background: white;
`;