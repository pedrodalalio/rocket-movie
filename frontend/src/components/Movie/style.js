import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    background: RGBA(255, 133, 155, 0.1);
    border-radius: 8px;
    height: 205px;
    padding: 32px;

    > h1{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p{
        width: 1280px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin: 16px 0 32px 0;
    }
`