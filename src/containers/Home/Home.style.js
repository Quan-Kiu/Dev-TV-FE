import styledComponents from 'styled-components';

export const HomeWrapper = styledComponents.div`
    .how-it-work{
        .ant-col{
            svg{
                color: ${(props) => props.theme.primaryClr}
            }
            .desc{
                opacity: 0.7;
                font-size: 15px;
            }
            .title{
                font-size: 18px;
                margin 2rem 0;
            }
        }
    }

    .site-stats{
        .ant-col{
            text-align: center;
            .desc{
                font-size: 18px;
            }
            .title{
                color: ${(props) => props.theme.primaryClr};
                font-size: 50px;
                font-weight: bold;
            }
        }
    }

    .new-blog{
        margin: 4rem auto;
   
        .ant-col{
            .desc{
                font-size: 14px;
                margin: 1rem 0;
            }
            .title{
                font-size: 18px;
                font-weight: medium;
            }
        }
        img{
            width: 100%;
            height: 100%;
            object-fit:contain;
        }
       
    }
`;
