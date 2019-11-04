import styled, {css} from 'styled-components';

export const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    margin: 40px;
    ${({mini}) => mini && css`
        width: 50px;
        height: 50px;
        margin: 5px;
    `};
    background: no-repeat center/170% url(/img/profileImage.jpeg);
    border-radius: 100%;
`;