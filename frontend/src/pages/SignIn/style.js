import styled from "styled-components";
import backgroundImage from "../../assets/image.png"
import { Link } from "react-router-dom"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-transform: center;

    > h1{
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > h2{
        font-size: 24px;
        margin: 48px 0;
    }

    > p{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_400}
    }

    > a{
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`

export const CreateAccount = styled(Link)`
    margin-top: 52px !important;
    align-self: center;
`