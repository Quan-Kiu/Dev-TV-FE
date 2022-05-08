import { md } from "../../../constants/breakPoint";
import useResponsive from "../../../hooks/useResponsive";

const { default: styledComponents } = require("styled-components");

export const AuthModalWrapper = styledComponents.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height:100%;
    overflow-Y: scroll;
    background: rgba(0,0,0,0.7);
    z-index: 10000;
    
   
    .content{
        margin: 3rem auto;
        position: relative;
        border-radius: 10px;
        text-align: center;
        padding:3rem 6rem;
        background: ${(props) => props.theme.whiteClr};
        width: 50rem;
        .ant-divider{
            span{
                opacity: .8;
                font-size: 1.6rem;  
            }
        }
        
        ${useResponsive`${md};
        width: 100%;
        padding:2rem 4rem;
        `}

        .close-button{
            position: absolute;
            right: -10px;
            top:-20px;
            cursor: pointer;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            font-weight: bold;
            border-radius: 50%;
            background: ${props=>props.theme.redClr};
            color: ${props=>props.theme.whiteClr};
        }

        .permission{
            label + label{
                margin-left: 10px;
            }
        }

        .title{
            font-size: 2.7rem;
            font-weight: 600;
        }

        .desc{
            opacity: .8;
        }
        .button-submit{
            padding: 1.5rem 0;
            height: auto;
            font-size: 1.6rem;
            font-weight: 600;
            display: inline-block;
            width: 100%;
            background: #141F72;
            color: ${props=>props.theme.whiteClr};
            border-radius: 10px;
        }

        .ant-form{
            input{
                padding: 1.5rem;
                font-size: 1.6rem;

            }
        }
        
    }

 
`;