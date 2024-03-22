import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    

    .contentTitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 7.5% 0 7.5%;

        h3 {
            font-size: 32px;
        }

        button{
            width: 207px;
            height: 48px;
            display: flex;
            align-items: center;
            
            svg{
                width: 24px;
                height: 24px;
                margin: auto 8px auto 8px;
            }
        }
    }
`

export const Content = styled.div`
    width: 85%;
    height: 80%;
    margin: 32px auto 0 auto;
    display: grid;

    grid-area: content;
    overflow-y: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
`