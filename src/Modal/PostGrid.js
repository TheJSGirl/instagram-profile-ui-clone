import styled from 'styled-components';

export const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 990px){
        grid-template-columns: 1fr;
    }
`;

export const InfoGrid  = styled.div`
    padding: 20px;
    display: grid;
    grid-template-rows: 60px auto 40px;
`;