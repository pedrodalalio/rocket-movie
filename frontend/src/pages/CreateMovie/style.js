import styled from "styled-components";

export const Container = styled.div`
    main{
        margin: 32px auto 0 auto;
        width: 85%;

        .linkContent{
            display: flex;
            color: ${({ theme }) => theme.COLORS.PINK};
            align-items: center;
        }

        > h1{
            margin: 32px 0 32px 0;
        }

        .mainContent{
            width: 80%;
        }

        .sideBySideInputs{
            display: flex;
        }
    }
    
`