import styledComponents from 'styled-components';
import { getContainerStyle } from '../../../utils/style_utils';
export const ContainerWrapper = styledComponents.div`
    ${(props) => {
        const style = getContainerStyle(props['width-data']);
        return style;
    }};

    margin: 0 auto;
   
`;
