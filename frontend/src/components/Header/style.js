import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.header`
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    align-items: center;

    > h2{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 14px;

        > span{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        > strong{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
`

export const Search = styled.div`
    grid-area: search;
    width: 530px;
    height: 48px;
`